import { ImageAdapter } from '../../../shared/adapters/image.adapter';
import { CategoryDTO, } from '../dto';
import { Category } from '../interfaces';


export class CategoryAdapter {
  public static createCategory(categoryDTO: CategoryDTO): Category {
    return {
       name: categoryDTO.name,
       slug: categoryDTO.slug,
       image: ImageAdapter.createImage(categoryDTO.image)
    };
  }
}