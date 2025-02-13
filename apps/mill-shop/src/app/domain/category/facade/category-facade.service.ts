import { inject, Injectable, computed, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { CategoryApiService } from '../services/category-api.service';
import { Category } from '../../../shared/interfaces/category.interface';

@Injectable({ providedIn: 'root' })
export class CategoryFacade {
  private categoryApiService = inject(CategoryApiService);

  categoriesResource = rxResource<Category[] | undefined, void>({
    loader: () => this.categoryApiService.getCategories(),
  });

  categoriesSignal = computed(() => this.categoriesResource.value() || []);
  loadingSignal = computed(() => this.categoriesResource.isLoading());
  errorSignal = computed(() => this.categoriesResource.error());

  public loadCategories(): void {
    this.categoriesResource.reload();
  }
}
