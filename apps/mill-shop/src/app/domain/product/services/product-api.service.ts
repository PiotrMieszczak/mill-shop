import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GraphqlService } from '../../../shared/services/graphql.service';
import { GET_PRODUCTS_BY_CATEGORY } from '../graphql/product.queries';
import { ProductDTO } from '../dto';
import { Product } from '../interfaces';
import { ProductAdapter } from '../adapters';

@Injectable({ providedIn: 'root' })
export class ProductApiService {
  constructor(private graphql: GraphqlService) {}

  getProductsByCategory(slug: string): Observable<Product[]> {
    return this.graphql
      .query<{ category: { products: ProductDTO[] } }>(
        GET_PRODUCTS_BY_CATEGORY,
        { slug }
      )
      .pipe(
        map(
          (data) =>
            data.category?.products?.map(ProductAdapter.createProduct) || []
        )
      );
  }
}
