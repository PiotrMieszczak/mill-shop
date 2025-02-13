import { TestBed } from '@angular/core/testing';
import { ProductApiService } from './product-api.service';
import { GraphqlService } from '../../../shared/services/graphql.service';
import { GET_PRODUCTS_BY_CATEGORY } from '../graphql/product.queries';
import { ProductAdapter } from '../adapters';
import { Product } from '../interfaces';
import { of } from 'rxjs';
import { mockProductsDTO } from '../../../shared/mocks';

describe('ProductApiService', () => {
  let service: ProductApiService;
  let graphqlServiceMock: jest.Mocked<GraphqlService>;

  const mockProducts: Product[] = mockProductsDTO.map(
    ProductAdapter.createProduct
  );

  beforeEach(() => {
    const mockGraphqlService = {
      query: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        ProductApiService,
        { provide: GraphqlService, useValue: mockGraphqlService },
      ],
    });

    service = TestBed.inject(ProductApiService);
    graphqlServiceMock = TestBed.inject(
      GraphqlService
    ) as jest.Mocked<GraphqlService>;
  });

  it('should fetch products by category successfully', (done) => {
    graphqlServiceMock.query.mockReturnValue(
      of({ category: { products: mockProductsDTO } })
    );

    service.getProductsByCategory('electronics').subscribe((products) => {
      expect(graphqlServiceMock.query).toHaveBeenCalledWith(
        GET_PRODUCTS_BY_CATEGORY,
        { slug: 'electronics' }
      );
      expect(products).toEqual(mockProducts);
      done();
    });
  });

  it('should return an empty array if no products exist', (done) => {
    graphqlServiceMock.query.mockReturnValue(
      of({ category: { products: [] } })
    );

    service.getProductsByCategory('unknown-category').subscribe((products) => {
      expect(graphqlServiceMock.query).toHaveBeenCalledWith(
        GET_PRODUCTS_BY_CATEGORY,
        { slug: 'unknown-category' }
      );
      expect(products).toEqual([]);
      done();
    });
  });
});
