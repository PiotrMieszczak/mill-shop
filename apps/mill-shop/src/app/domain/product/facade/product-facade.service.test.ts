import { TestBed, fakeAsync, flush, tick } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
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

  it('should load products successfully', fakeAsync(() => {
    productApiServiceMock.getProductsByCategory.mockReturnValue(
      of(mockProducts)
    );

    expect(facade.productsResource.value()).toBeUndefined();

    facade.getProductsByCategory('electronics');
    tick();

    expect(facade.productsResource.isLoading()).toBe(false);
    expect(facade.productsResource.value()).toEqual(mockProducts);
    expect(facade.productsResource.error()).toBeNull();
  }));

  it('should return an empty array when no category is provided', fakeAsync(() => {
    productApiServiceMock.getProductsByCategory.mockReturnValue(of([]));

    expect(facade.productsResource.value()).toBeUndefined();

    facade.getProductsByCategory('');
    flush();

    expect(productApiServiceMock.getProductsByCategory).not.toHaveBeenCalled();
    expect(facade.productsResource.value()).toEqual([]);
  }));

  it('should handle API failure', fakeAsync(() => {
    const errorResponse = { message: 'Failed to fetch', status: 500 };
    productApiServiceMock.getProductsByCategory.mockReturnValue(
      throwError(() => errorResponse)
    );

    expect(facade.productsResource.isLoading()).toBe(false);

    facade.getProductsByCategory('electronics');
    tick();

    expect(facade.productsResource.isLoading()).toBe(false);
    expect(facade.productsResource.value()).toBeUndefined();
    expect(facade.productsResource.error()).toEqual(errorResponse.message);
  }));
});
