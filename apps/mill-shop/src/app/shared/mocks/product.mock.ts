import { ProductDTO } from '../../domain/product/dto';

export const mockProductsDTO: ProductDTO[] = [
  {
    id: 1,
    slug: 'laptop',
    name: 'Laptop',
    description: 'A powerful laptop',
    price: 1200,
    image: { url: 'laptop.jpg', fileName: 'laptop.jpg' },
    category: { slug: 'electronics', name: 'Electronics' },
  },
  {
    id: 2,
    slug: 'mouse',
    name: 'Wireless Mouse',
    description: 'A fast wireless mouse',
    price: 50,
    image: { url: 'mouse.jpg', fileName: 'mouse.jpg' },
    category: { slug: 'books', name: 'Books' },
  },
];
