import { computed, inject, Injectable, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductApiService } from '../services/product-api.service';
import { Product } from '../interfaces';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductFacadeService {
  private productApiService = inject(ProductApiService);
  private categorySlug = signal<string>('');

  productsResource = rxResource<Product[] | undefined, string>({
    request: () => this.categorySlug(),
    loader: ({ request: slug }) =>
      slug ? this.productApiService.getProductsByCategory(slug) : of([]),
  });

  productsSignal = computed(() => this.productsResource.value() || []);
  loadingSignal = computed(() => this.productsResource.isLoading());
  errorSignal = computed(() => this.productsResource.error());
  categorySignal = computed(() =>
    this.productsSignal().length > 0 ? this.productsSignal()[0].category : null
  );

  getProductsByCategory(slug: string): void {
    this.categorySlug.set(slug);
  }
}
