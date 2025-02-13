import { CategoryDTO, ImageDTO } from '../../../shared/dto';

export interface ProductDTO {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  image: ImageDTO;
  category: Pick<CategoryDTO, 'slug' | 'name'>;
}
