import { HomePageDTO } from '../dto';
import { HomePage } from '../interfaces';

export class HomePageAdapter {
  static createHomePage(pageData: HomePageDTO): HomePage {
    return {
      pageTitle: pageData.pageTitle,
      header: pageData.header,
      slug: pageData.slug,
      banner: {
        url: pageData.banner.url,
        fileName: pageData.banner.fileName,
      },
    };
  }
}
