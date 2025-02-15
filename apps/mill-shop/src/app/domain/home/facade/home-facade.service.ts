import { inject, Injectable } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { HomeApiService } from '../../../domain/home/services/home-api.service';
import { HomePage } from '../interfaces';
import { Category } from '../../../shared/interfaces';

@Injectable({ providedIn: 'root' })
export class HomeFacadeService {
  private homeApiService = inject(HomeApiService);

  homeResource = rxResource<HomePage | undefined, void>({
    loader: () => this.homeApiService.getHomePageData(),
  });

  topCategoriesResource = rxResource<Category[] | undefined, void>({
    loader: () => this.homeApiService.getTopCategories(),
  });

  homePageSignal = this.homeResource.value;
  loadingSignal = this.homeResource.isLoading;
  errorSignal = this.homeResource.error;

  topCategoriesSignal = this.topCategoriesResource.value;
  topLoadingSignal = this.topCategoriesResource.isLoading;
  topErrorSignal = this.topCategoriesResource.error;

  loadHomePage(): void {
    this.homeResource.reload();
  }

  getTopCategories(): void {
    this.topCategoriesResource.reload();
  }
}
