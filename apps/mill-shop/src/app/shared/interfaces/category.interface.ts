import { Image } from '.';

export interface Category {
  slug: string;
  name: string;
  image: Image;
  productCount: number;
}
