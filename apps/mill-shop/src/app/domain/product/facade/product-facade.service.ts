import { computed, inject, Injectable, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductApiService } from '../services/product-api.service';
import { Product } from '../interfaces';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductFacadeService {
  private productApiService = inject(ProductApiService);
  private categorySlug = signal<string>('');
  private productSlug = signal<string>('');

  productsSignal = computed(() => this.productsResource.value() || []);
  categorySignal = computed(() =>
    this.productsSignal() && this.productsSignal().length
      ? this.productsSignal().shift()?.category
      : null,
  );
  productDetailsSignal = computed(() => this.productDetailsResource.value());
  relatedProductsSignal = computed(() => this.relatedProductsResource.value() || []);
  isLoadingSignal = computed(
    () => this.productsResource.isLoading() || this.productDetailsResource.isLoading(),
  );
  hasErrorSignal = computed(
    () => !!this.productsResource.error() || !!this.productDetailsResource.error(),
  );
  relatedProductsLoadingSignal = computed(() => this.relatedProductsResource.isLoading());
  relatedProductsErrorSignal = computed(() => this.relatedProductsResource.error());

  /*** Resources ***/
  productsResource = rxResource<Product[] | undefined, string>({
    request: () => this.categorySlug(),
    loader: ({ request: slug }) =>
      slug ? this.productApiService.getProductsByCategory(slug) : of([]),
  });

  productDetailsResource = rxResource<Product | undefined, { category: string; product: string }>({
    request: () => ({
      category: this.categorySlug(),
      product: this.productSlug(),
    }),
    loader: ({ request }) =>
      request.category && request.product
        ? this.productApiService.getProductDetails(request.category, request.product)
        : of(undefined),
  });

  relatedProductsResource = rxResource<
    Product[] | undefined,
    { category: string; product: string }
  >({
    request: () => ({
      category: this.categorySlug(),
      product: this.productSlug(),
    }),
    loader: ({ request }) =>
      request.category && request.product
        ? this.productApiService.getRelatedProducts(request.category, request.product)
        : of([]),
  });

  getProductsByCategory(slug: string): void {
    this.categorySlug.set(slug);
  }

  getProductDetails(categorySlug: string, productSlug: string): void {
    console.log('categorySlug', categorySlug);
    this.categorySlug.set(categorySlug);
    this.productSlug.set(productSlug);
  }
}
