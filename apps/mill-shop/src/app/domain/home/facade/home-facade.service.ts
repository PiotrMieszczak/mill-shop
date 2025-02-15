import { Injectable, computed, inject } from '@angular/core';
import { HomeApiService } from '../../../domain/home/services/home-api.service';

@Injectable({ providedIn: 'root' })
export class HomeFacade {
  private homeApi = inject(HomeApiService);

  homeDataSignal = computed(() => this.homeApi.getHomePageData());
}
