import { TestBed } from '@angular/core/testing';
import { lastValueFrom, of, throwError } from 'rxjs';
import { ProductFacadeService } from './product-facade.service';
import { ProductApiService } from '../services/product-api.service';
import { Product } from '../interfaces';
import { ProductAdapter } from '../adapters/product.adapter';
import { mockProductsDTO } from '../../../shared/mocks';

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

    expect(facade.loading$()).toBe(false);

    facade.getProductsByCategory('electronics').subscribe();

    expect(productApiServiceMock.getProductsByCategory).toHaveBeenCalledTimes(
      1
    );
    expect(productApiServiceMock.getProductsByCategory).toHaveBeenCalledWith(
      'electronics'
    );

    await lastValueFrom(
      productApiServiceMock.getProductsByCategory('electronics')
    );

    expect(facade.loading$()).toBe(false);
    expect(facade.products$()).toEqual(mockProducts);
    expect(facade.error$()).toBeNull();
  });

  it('should handle API failure', async () => {
    const errorResponse = { message: 'Failed to fetch', status: 500 };
    productApiServiceMock.getProductsByCategory.mockReturnValue(
      throwError(() => errorResponse)
    );

    expect(facade.loading$()).toBe(false);

    facade.getProductsByCategory('electronics').subscribe({
      error: () => {
        expect(facade.loading$()).toBe(false);
        expect(facade.products$()).toEqual([]);
        expect(facade.error$()).toBe(errorResponse.message);
      },
    });

    try {
      await lastValueFrom(
        productApiServiceMock.getProductsByCategory('electronics')
      );
    } catch (_) {
      expect(facade.loading$()).toBe(false);
      expect(facade.products$()).toEqual([]);
      expect(facade.error$()).toBe(errorResponse.message);
    }
  });
});
