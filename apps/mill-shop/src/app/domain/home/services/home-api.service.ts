import { inject, Injectable } from '@angular/core';
import { GraphqlService } from '../../../shared/services/graphql.service';
import { map, Observable } from 'rxjs';
import { GET_HOME_PAGE } from '../graphql/home-page.queries';
import { HomePage } from '../interfaces';
import { HomePageDTO } from '../dto';
import { HomePageAdapter } from '../adapters';

@Injectable({ providedIn: 'root' })
export class HomeApiService {
  private graphql = inject(GraphqlService);

  getHomePageData(): Observable<HomePage> {
    return this.graphql
      .query<{ page: HomePageDTO }>(GET_HOME_PAGE, { fetchPolicy: 'cache-first' })
      .pipe(map((data) => HomePageAdapter.createHomePage(data.page)));
  }
}
