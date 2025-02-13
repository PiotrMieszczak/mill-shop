import { TestBed } from '@angular/core/testing';
import { of, throwError, firstValueFrom } from 'rxjs';
import { ProductFacadeService } from './product-facade.service';
import { ProductApiService } from '../services/product-api.service';
import { Product } from '../interfaces';
import { ProductAdapter } from '../adapters/product.adapter';
import { mockProductsDTO } from '../../../shared/mocks';
import { toObservable } from '@angular/core/rxjs-interop';

describe('ProductFacadeService', () => {
  let facade: ProductFacadeService;
  let productApiServiceMock: jest.Mocked<ProductApiService>;

  const mockProducts: Product[] = mockProductsDTO.map(
    ProductAdapter.createProduct
  );

  beforeEach(() => {
    const mockProductApiService = {
      getProductsByCategory: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        ProductFacadeService,
        { provide: ProductApiService, useValue: mockProductApiService },
      ],
    });

    facade = TestBed.inject(ProductFacadeService);
    productApiServiceMock = TestBed.inject(
      ProductApiService
    ) as jest.Mocked<ProductApiService>;
  });

  it('should load products successfully', async () => {
    productApiServiceMock.getProductsByCategory.mockReturnValue(
      of(mockProducts)
    );

    expect(facade.productsResource.value()).toBeUndefined();

    await TestBed.runInInjectionContext(async () => {
      facade.getProductsByCategory('electronics');

      await firstValueFrom(toObservable(facade.productsResource.value));

      expect(facade.productsResource.isLoading()).toBe(false);
      expect(facade.productsResource.value()).toEqual(mockProducts);
      expect(facade.productsResource.error()).toBeUndefined();
    });
  });

  it('should return an empty array when no category is provided', async () => {
    productApiServiceMock.getProductsByCategory.mockReturnValue(of([]));

    expect(facade.productsResource.value()).toBeUndefined();

    await TestBed.runInInjectionContext(async () => {
      facade.getProductsByCategory('');

      await firstValueFrom(toObservable(facade.productsResource.value));

      expect(
        productApiServiceMock.getProductsByCategory
      ).not.toHaveBeenCalled();
      expect(facade.productsResource.value()).toEqual([]);
    });
  });

  it('should handle API failure', async () => {
    const errorResponse = { message: 'Failed to fetch', status: 500 };
    productApiServiceMock.getProductsByCategory.mockReturnValue(
      throwError(() => errorResponse)
    );

    await TestBed.runInInjectionContext(async () => {
      facade.getProductsByCategory('electronics');

      expect(facade.productsResource.isLoading()).toBe(true);

      try {
        await firstValueFrom(toObservable(facade.productsResource.error));
      } catch (_) {
        expect(facade.productsResource.isLoading()).toBe(false);
        expect(facade.productsResource.error()).toBe(errorResponse.message);
      }
    });
  });
});
