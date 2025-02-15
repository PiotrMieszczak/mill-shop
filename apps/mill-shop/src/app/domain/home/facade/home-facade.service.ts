import { inject, Injectable, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { HomeApiService } from '../../../domain/home/services/home-api.service';
import { HomePage } from '../interfaces';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HomeFacadeService {
  private homeApiService = inject(HomeApiService);

  homeResource = rxResource<HomePage | undefined, void>({
    loader: () => this.homeApiService.getHomePageData(),
  });

  homePageSignal = this.homeResource.value;
  loadingSignal = this.homeResource.isLoading;
  errorSignal = this.homeResource.error;

  loadHomePage(): void {
    this.homeResource.reload();
  }
}
