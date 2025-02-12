import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GraphqlService } from '../../../shared/services';
import { CategoryDTO } from '../dto';
import { gql } from 'apollo-angular';
import { CategoryAdapter } from '../adapters/category.adapter';
import { Category } from '../interfaces';

const GET_CATEGORIES = gql`
  query {
    categories {
      id
      slug
      name
      image {
        url
        fileName
      }
    }
  }
`;

@Injectable({ providedIn: 'root' })
export class CategoryApiService {
    constructor(private graphql: GraphqlService) {}
  
    getCategories(): Observable<Category[]> {
      return this.graphql
        .query<{ categories: CategoryDTO[] }>(GET_CATEGORIES)
        .pipe(map((data) => data.categories.map(CategoryAdapter.createCategory)));
    }
  }
