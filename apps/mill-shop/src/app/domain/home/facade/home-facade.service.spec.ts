import { TestBed } from '@angular/core/testing';
import { of, throwError, firstValueFrom } from 'rxjs';
import { HomeFacadeService } from './home-facade.service';
import { HomeApiService } from '../services/home-api.service';
import { HomePage } from '../interfaces';

import { toObservable } from '@angular/core/rxjs-interop';
import { HomePageAdapter } from '../adapters';
import { HomePageDTO } from '../dto';

const mockHomePageDTO: HomePageDTO = {
  pageTitle: 'Welcome to Mill Shop',
  header: 'Find the best products for you',
  slug: 'home-page',
  banner: {
    url: 'https://example.com/banner.jpg',
    fileName: 'banner.jpg',
  },
  id: '',
};

describe('HomeFacadeService', () => {
  let facade: HomeFacadeService;
  let homeApiServiceMock: jest.Mocked<HomeApiService>;

  const mockHomePage: HomePage = HomePageAdapter.createHomePage(mockHomePageDTO);

  beforeEach(() => {
    const mockHomeApiService = {
      getHomePageData: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [HomeFacadeService, { provide: HomeApiService, useValue: mockHomeApiService }],
    });

    facade = TestBed.inject(HomeFacadeService);
    homeApiServiceMock = TestBed.inject(HomeApiService) as jest.Mocked<HomeApiService>;
  });

  it('should load home page data successfully', async () => {
    homeApiServiceMock.getHomePageData.mockReturnValue(of(mockHomePage));

    expect(facade.homePageSignal()).toBeUndefined();
    expect(facade.errorSignal()).toBeUndefined();

    await TestBed.runInInjectionContext(async () => {
      facade.homeResource.reload();
      await firstValueFrom(toObservable(facade.homeResource.value));
    });

    expect(facade.loadingSignal()).toBe(false);
    expect(facade.homePageSignal()).toEqual(mockHomePage);
    expect(facade.errorSignal()).toBeUndefined();
  });

  it('should handle API failure', async () => {
    const errorResponse = { message: 'Failed to fetch', status: 500 };
    homeApiServiceMock.getHomePageData.mockReturnValue(throwError(() => errorResponse));

    expect(facade.homePageSignal()).toBeUndefined();
    expect(facade.errorSignal()).toBeUndefined();

    await TestBed.runInInjectionContext(async () => {
      try {
        facade.homeResource.reload();
        await firstValueFrom(toObservable(facade.homeResource.error));
      } catch (_) {
        expect(facade.errorSignal()).toBe('Failed to fetch');
      }
    });
  });
});
