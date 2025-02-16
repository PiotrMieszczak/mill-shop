import { ImageAdapter } from '../../../shared/adapters/image.adapter';
import { ProductDTO } from '../dto';
import { Product } from '../interfaces';

export class ProductAdapter {
  public static createProduct(productDTO: ProductDTO): Product {
    return {
      name: productDTO.name,
      slug: productDTO.slug,
      description: productDTO.description,
      image: ImageAdapter.createImage(productDTO.image),
      price: productDTO.price,
      category: productDTO.category,
    };
  }
}
