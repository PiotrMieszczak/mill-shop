import { TestBed } from '@angular/core/testing';
import { of, throwError, lastValueFrom, firstValueFrom } from 'rxjs';
import { CategoryFacade } from './category-facade.service';
import { CategoryApiService } from '../services/category-api.service';
import { Category } from '../../../shared/interfaces/category.interface';
import { mockCategoryDTO } from '../../../shared/mocks';
import { CategoryAdapter } from '../adapters/category.adapter';
import { toObservable } from '@angular/core/rxjs-interop';

describe('CategoryFacade', () => {
  let facade: CategoryFacade;
  let categoryApiServiceMock: jest.Mocked<CategoryApiService>;

  const mockCategories: Category[] = mockCategoryDTO.map(CategoryAdapter.createCategory);

  beforeEach(() => {
    const mockCategoryApiService = {
      getCategories: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        CategoryFacade,
        { provide: CategoryApiService, useValue: mockCategoryApiService },
      ],
    });

    facade = TestBed.inject(CategoryFacade);
    categoryApiServiceMock = TestBed.inject(CategoryApiService) as jest.Mocked<CategoryApiService>;
  });

  it('should load categories successfully', async () => {
    categoryApiServiceMock.getCategories.mockReturnValue(of(mockCategories));

    expect(facade.categoriesSignal()).toEqual([]);
    expect(facade.errorSignal()).toBeUndefined();

    await TestBed.runInInjectionContext(async () => {
      categoryApiServiceMock.getCategories.mockReturnValue(of(mockCategories));

      facade.categoriesResource.value();

      await firstValueFrom(toObservable(facade.categoriesResource.value));

      expect(facade.categoriesResource.value()).toBeDefined();
      expect(facade.categoriesResource.value()).toEqual(mockCategories);
    });

    expect(facade.loadingSignal()).toBe(false);
    expect(facade.categoriesSignal()).toEqual(mockCategories);
    expect(facade.errorSignal()).toBeUndefined();
  });

  it('should handle API failure', async () => {
    const errorResponse = { message: 'Failed to fetch', status: 500 };
    categoryApiServiceMock.getCategories.mockReturnValue(throwError(() => errorResponse));

    expect(facade.categoriesSignal()).toEqual([]);
    expect(facade.errorSignal()).toBeUndefined();

    await TestBed.runInInjectionContext(async () => {
      try {
        facade.categoriesResource.value();
        await firstValueFrom(toObservable(facade.categoriesResource.error));
      } catch (_) {
        expect(facade.errorSignal()).toBe('Failed to fetch');
      }
    });
  });
});
