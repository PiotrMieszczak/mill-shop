import { TestBed } from '@angular/core/testing';
import { ProductApiService } from './product-api.service';
import { GraphqlService } from '../../../shared/services/graphql/graphql.service';
import { GET_PRODUCT_DETAILS, GET_PRODUCTS_BY_CATEGORY } from '../graphql/product.queries';
import { ProductAdapter } from '../adapters';
import { Product } from '../interfaces';
import { of } from 'rxjs';
import { mockProductsDTO } from '../../../shared/mocks';

describe('ProductApiService', () => {
  let service: ProductApiService;
  let graphqlServiceMock: jest.Mocked<GraphqlService>;

  const mockProducts: Product[] = mockProductsDTO.map(ProductAdapter.createProduct);
  const mockProduct = mockProducts[0];
  const mockProductDTO = mockProductsDTO[0];

  beforeEach(() => {
    const mockGraphqlService = {
      query: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [ProductApiService, { provide: GraphqlService, useValue: mockGraphqlService }],
    });

    service = TestBed.inject(ProductApiService);
    graphqlServiceMock = TestBed.inject(GraphqlService) as jest.Mocked<GraphqlService>;
  });

  it('should fetch products by category successfully', (done) => {
    graphqlServiceMock.query.mockReturnValue(of({ products: mockProductsDTO }));

    service.getProductsByCategory('electronics').subscribe((products) => {
      expect(graphqlServiceMock.query).toHaveBeenCalledWith(GET_PRODUCTS_BY_CATEGORY, {
        slug: 'electronics',
        fetchPolicy: 'cache-first',
      });
      expect(products).toEqual(mockProducts);
      done();
    });
  });

  it('should return an empty array if no products exist', (done) => {
    graphqlServiceMock.query.mockReturnValue(of({ products: [] }));

    service.getProductsByCategory('unknown-category').subscribe((products) => {
      expect(graphqlServiceMock.query).toHaveBeenCalledWith(GET_PRODUCTS_BY_CATEGORY, {
        slug: 'unknown-category',
        fetchPolicy: 'cache-first',
      });
      expect(products).toEqual([]);
      done();
    });
  });

  it('should fetch product details successfully', (done) => {
    graphqlServiceMock.query.mockReturnValue(of({ product: mockProductDTO }));

    service.getProductDetails('electronics', 'laptop').subscribe((product) => {
      expect(graphqlServiceMock.query).toHaveBeenCalledWith(GET_PRODUCT_DETAILS, {
        categorySlug: 'electronics',
        productSlug: 'laptop',
        fetchPolicy: 'cache-first',
      });
      expect(product).toEqual(mockProduct);
      done();
    });
  });
});
