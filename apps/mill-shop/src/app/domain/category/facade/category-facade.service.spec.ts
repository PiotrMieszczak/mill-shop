import { TestBed } from '@angular/core/testing';
import { lastValueFrom, of, throwError } from 'rxjs';
import { CategoryFacade } from './category-facade.service';
import { CategoryApiService } from '../services/category-api.service';
import { Category } from '../interfaces/category.interface';

describe('CategoryFacade', () => {
  let facade: CategoryFacade;
  let categoryApiServiceMock: jest.Mocked<CategoryApiService>;

  const mockCategories: Category[] = [
    {
      name: 'Electronics',
      slug: 'electronics',
      image: { url: 'image-url-1', fileName: 'image1.jpg' },
    },
    {
      name: 'Books',
      slug: 'books',
      image: { url: 'image-url-2', fileName: 'image2.jpg' },
    },
  ];

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
    categoryApiServiceMock = TestBed.inject(
      CategoryApiService
    ) as jest.Mocked<CategoryApiService>;
  });

  it('should load categories successfully', async () => {
    categoryApiServiceMock.getCategories.mockReturnValue(of(mockCategories));

    expect(facade.loading$()).toBe(false);

    facade.loadCategories();

    expect(categoryApiServiceMock.getCategories).toHaveBeenCalledTimes(1);

    await lastValueFrom(categoryApiServiceMock.getCategories());

    expect(facade.loading$()).toBe(false);
    expect(facade.categories$()).toEqual(mockCategories);
    expect(facade.error$()).toBeNull();
  });

  it('should handle API failure', async () => {
    const errorResponse = { message: 'Failed to fetch', status: 500 };
    categoryApiServiceMock.getCategories.mockReturnValue(
      throwError(() => errorResponse)
    );

    expect(facade.loading$()).toBe(false);

    facade.loadCategories();

    try {
      await lastValueFrom(categoryApiServiceMock.getCategories());
    } catch (_) {
      expect(facade.loading$()).toBe(false);
      expect(facade.categories$()).toEqual([]);
      expect(facade.error$()).toBe(errorResponse.message);
    }
  });
});
