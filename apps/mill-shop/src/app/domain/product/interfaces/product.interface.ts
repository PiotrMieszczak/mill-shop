import { Category, Image } from '../../../shared/interfaces';

export interface Product {
  slug: string;
  name: string;
  description: string;
  price: number;
  image: Image;
  category: Omit<Category, 'image' | 'productCount'>;
}
