import { ImageDTO } from '.';

export interface CategoryDTO {
  id: number;
  slug: string;
  name: string;
  image: ImageDTO;
  product: { slug: string }[];
}
