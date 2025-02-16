import { TestBed } from '@angular/core/testing';
import { CategoryApiService } from './category-api.service';
import { GraphqlService } from '../../../shared/services/graphql/graphql.service';
import { of } from 'rxjs';
import { CategoryAdapter } from '../adapters/category.adapter';
import { GET_CATEGORIES } from '../graphql';
import { Category } from '../../../shared/interfaces';
import { mockCategoryDTO } from '../../../shared/mocks';

describe('CategoryApiService', () => {
  let service: CategoryApiService;
  let graphqlServiceMock: jest.Mocked<GraphqlService>;

  beforeEach(() => {
    graphqlServiceMock = {
      query: jest.fn(),
    } as unknown as jest.Mocked<GraphqlService>;

    TestBed.configureTestingModule({
      providers: [CategoryApiService, { provide: GraphqlService, useValue: graphqlServiceMock }],
    });

    service = TestBed.inject(CategoryApiService);
  });

  it('should call GraphqlService and transform the response using CategoryAdapter', (done) => {
    graphqlServiceMock.query.mockReturnValue(of({ categories: mockCategoryDTO }));

    const mockCategory: Category[] = mockCategoryDTO.map(CategoryAdapter.createCategory);

    service.getCategories().subscribe((categories) => {
      expect(categories).toEqual(mockCategory);
      expect(graphqlServiceMock.query).toHaveBeenCalledWith(GET_CATEGORIES, {
        fetchPolicy: 'cache-first',
      });
      done();
    });
  });
});
