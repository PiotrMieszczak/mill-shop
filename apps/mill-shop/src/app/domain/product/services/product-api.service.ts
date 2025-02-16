import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GraphqlService } from '../../../shared/services/graphql/graphql.service';
import {
  GET_PRODUCT_DETAILS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_RELATED_PRODUCTS,
} from '../graphql/product.queries';
import { ProductDTO } from '../dto';
import { Product } from '../interfaces';
import { ProductAdapter } from '../adapters';

@Injectable({ providedIn: 'root' })
export class ProductApiService {
  private graphql = inject(GraphqlService);

  getProductsByCategory(slug: string): Observable<Product[]> {
    return this.graphql
      .query<{ products: ProductDTO[] }>(GET_PRODUCTS_BY_CATEGORY, {
        slug,
        fetchPolicy: 'cache-first',
      })
      .pipe(map((data) => data.products.map(ProductAdapter.createProduct)));
  }

  getProductDetails(categorySlug: string, productSlug: string): Observable<Product> {
    return this.graphql
      .query<{ product: ProductDTO }>(GET_PRODUCT_DETAILS, {
        categorySlug,
        productSlug,
        fetchPolicy: 'cache-first',
      })
      .pipe(map((data) => ProductAdapter.createProduct(data.product)));
  }

  getRelatedProducts(categorySlug: string, productSlug: string): Observable<Product[]> {
    return this.graphql
      .query<{ products: ProductDTO[] }>(GET_RELATED_PRODUCTS, {
        categorySlug,
        productSlug,
        fetchPolicy: 'cache-first',
      })
      .pipe(map((data) => data.products.map(ProductAdapter.createProduct)));
  }
}
