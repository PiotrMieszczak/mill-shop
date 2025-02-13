import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GraphqlService } from '../../../shared/services';
import { CategoryAdapter } from '../adapters/category.adapter';
import { GET_CATEGORIES } from '../graphql';
import { CategoryDTO } from '../../../shared/dto';
import { Category } from '../../../shared/interfaces';

@Injectable({ providedIn: 'root' })
export class CategoryApiService {
  constructor(private graphql: GraphqlService) {}

  getCategories(): Observable<Category[]> {
    return this.graphql
      .query<{ categories: CategoryDTO[] }>(GET_CATEGORIES, {
        fetchPolicy: 'cache-first',
      })
      .pipe(map((data) => data.categories.map(CategoryAdapter.createCategory)));
  }
}
