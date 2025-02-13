import { Injectable, WritableSignal, inject, signal } from '@angular/core';

import { CategoryApiService } from '../services/category-api.service';
import { Category } from '../interfaces/category.interface';
import { take, tap } from 'rxjs/operators';

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
    this.categoryApiService
      .getCategories()
      .pipe(tap(() => this.loadingSignal.set(true)))
      .subscribe({
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
}
