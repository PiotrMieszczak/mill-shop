import { ImageDTO, } from '../dto';
import { Image } from '../interfaces'

export class ImageAdapter {
  public static createImage(imageDTO: ImageDTO): Image {
    return {
       url: imageDTO.url,
       fileName: imageDTO.fileName,
    };
  }
}