import { inject, Injectable } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { HomeApiService } from '../../../domain/home/services/home-api.service';
import { HomePage } from '../interfaces';
import { CategoryFacade } from '../../category/facade';

@Injectable({ providedIn: 'root' })
export class HomeFacadeService {
  private homeApiService = inject(HomeApiService);
  private categoryFacade = inject(CategoryFacade);

  homeResource = rxResource<HomePage | undefined, void>({
    loader: () => this.homeApiService.getHomePageData(),
  });

  homePageSignal = this.homeResource.value;
  loadingSignal = this.homeResource.isLoading;
  errorSignal = this.homeResource.error;

  topCategoriesSignal = this.categoryFacade.topCategoriesSignal;
  topLoadingSignal = this.categoryFacade.topLoadingSignal;
  topErrorSignal = this.categoryFacade.topErrorSignal;

  loadHomePage(): void {
    this.homeResource.reload();
  }

  getTopCategories(): void {
    this.categoryFacade.getTopCategories();
  }
}
