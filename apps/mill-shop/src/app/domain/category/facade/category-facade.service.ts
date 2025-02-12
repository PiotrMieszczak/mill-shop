import { Injectable, WritableSignal, inject, signal } from '@angular/core';

import { CategoryApiService } from '../services/category-api.service';
import { Category } from '../interfaces/category.interface';
import { map } from 'rxjs/operators';

export type FailureError = {
    message: string;
    status: number;
  };

@Injectable({ providedIn: 'root' })
export class CategoryFacade {
  private categoryApiService = inject(CategoryApiService);
  private categoriesSignal: WritableSignal<Category[]> = signal([]);
  private loadingSignal: WritableSignal<boolean> = signal(false);
  private errorSignal: WritableSignal<string | null> = signal(null);

  categories$ = this.categoriesSignal;
  loading$ = this.loadingSignal;
  error$ = this.errorSignal;

  public loadCategories() {
    this.loadingSignal.set(true);
    this.categoryApiService.getCategories().subscribe({
      next: (categories) => {
        this.categoriesSignal.set(categories);
        this.loadingSignal.set(false);
      },
      error: (error) => {
        this.errorSignal.set(error.message);
        this.loadingSignal.set(false);
      },
    });
  }

//   public loadCategoriesList(): void {
//     this.loadingSignal.set(true);
//     this.categoryApiService.getCategories().pipe(
//         map((categories) => {
//             this.categoriesSignal.set(categories);
//             this.loadingSignal.set(false);
//         }),
//     ).subscribe();
//   }
}
