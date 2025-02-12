import { ImageDTO } from "../../../shared/dto";

export interface CategoryDTO {
  id: number;
  slug: string;
  name: string;
  image: ImageDTO
}