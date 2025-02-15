import { inject, Injectable } from '@angular/core';
import { GraphqlService } from '../../../shared/services/graphql.service';
import { map, Observable } from 'rxjs';
import { GET_HOME_PAGE, GET_TOP_CATEGORIES } from '../graphql/home-page.queries';
import { HomePage } from '../interfaces';
import { HomePageDTO } from '../dto';
import { HomePageAdapter } from '../adapters';
import { Category } from '../../../shared/interfaces';
import { CategoryDTO } from '../../../shared/dto';
import { CategoryAdapter } from '../../category/adapters';

@Injectable({ providedIn: 'root' })
export class HomeApiService {
  private graphql = inject(GraphqlService);

  getHomePageData(): Observable<HomePage> {
    return this.graphql
      .query<{ page: HomePageDTO }>(GET_HOME_PAGE, { fetchPolicy: 'cache-first' })
      .pipe(map((data) => HomePageAdapter.createHomePage(data.page)));
  }

  getTopCategories(): Observable<Category[]> {
    return this.graphql
      .query<{ categories: CategoryDTO[] }>(GET_TOP_CATEGORIES, {
        fetchPolicy: 'cache-first',
      })
      .pipe(map((data) => data.categories.map(CategoryAdapter.createCategory)));
  }
}
