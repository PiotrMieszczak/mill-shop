import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GraphqlService } from '../../../shared/services';
import { CategoryDTO } from '../dto';
import { CategoryAdapter } from '../adapters/category.adapter';
import { Category } from '../interfaces';
import { GET_CATEGORIES } from '../graphql';


@Injectable({ providedIn: 'root' })
export class CategoryApiService {
    constructor(private graphql: GraphqlService) {}
  
    getCategories(): Observable<Category[]> {
      return this.graphql
        .query<{ categories: CategoryDTO[]}>(GET_CATEGORIES, {fetchPolicy: 'cache-first'})
        .pipe(map((data) => data.categories.map(CategoryAdapter.createCategory)));
    }
  }
