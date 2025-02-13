import { CategoryDTO } from '../dto';

export const mockCategoryDTO: CategoryDTO[] = [
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
