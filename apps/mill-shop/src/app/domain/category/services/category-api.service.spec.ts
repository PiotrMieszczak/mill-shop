import { TestBed } from '@angular/core/testing';
import { CategoryApiService } from './category-api.service';
import { GraphqlService } from '../../../shared/services/graphql.service';
import { of } from 'rxjs';
import { CategoryAdapter } from '../adapters/category.adapter';
import { CategoryDTO } from '../dto';
import { Category } from '../interfaces';
import { GET_CATEGORIES } from '../graphql';


describe('CategoryApiService', () => {
  let service: CategoryApiService;
  let graphqlServiceMock: jest.Mocked<GraphqlService>;

  beforeEach(() => {
    graphqlServiceMock = {
      query: jest.fn(),
    } as unknown as jest.Mocked<GraphqlService>;

    TestBed.configureTestingModule({
      providers: [
        CategoryApiService,
        { provide: GraphqlService, useValue: graphqlServiceMock },
      ],
    });

    service = TestBed.inject(CategoryApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call GraphqlService and transform the response using CategoryAdapter', (done) => {
    const mockCategoryDTO: CategoryDTO[] = [
      {
        id: 1,
        slug: 'electronics',
        name: 'Electronics',
        image: { url: 'image-url-1', fileName: 'image1.jpg' },
      },
      {
        id: 2,
        slug: 'books',
        name: 'Books',
        image: { url: 'image-url-2', fileName: 'image2.jpg' },
      },
    ];

    const mockCategory: Category[] = mockCategoryDTO.map(CategoryAdapter.createCategory);

    graphqlServiceMock.query.mockReturnValue(of({ categories: mockCategoryDTO }));

    service.getCategories().subscribe((categories) => {
      expect(categories).toEqual(mockCategory);
      expect(graphqlServiceMock.query).toHaveBeenCalledWith(
        GET_CATEGORIES,
        { fetchPolicy: 'cache-first' }
      );
      done();
    });
  });
});
