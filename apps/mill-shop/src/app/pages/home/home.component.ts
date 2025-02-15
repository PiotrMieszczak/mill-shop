import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { HomeFacadeService } from '../../domain/home/facade';
import { ClickboxComponent, LinkComponent } from '@mill-shop/design-system/components';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [LinkComponent, ClickboxComponent, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private facade = inject(HomeFacadeService);
  private router = inject(Router);

  homePageSignal = this.facade.homePageSignal;
  loadingSignal = this.facade.loadingSignal;
  errorSignal = this.facade.errorSignal;
  backgroundImageSignal = computed(() => `url(${this.homePageSignal()?.banner.url})`);

  topCategoriesSignal = this.facade.topCategoriesSignal;
  topLoadingSignal = this.facade.topLoadingSignal;
  topErrorSignal = this.facade.topErrorSignal;

  categoryClasses(index: number): string {
    const layouts = ['col-m-4 col-d-12', 'col-m-2 col-d-8', 'col-m-2 col-d-4'];
    return layouts[index] || 'col-m-12';
  }

  ngOnInit(): void {
    this.facade.loadHomePage();
    this.facade.getTopCategories();
  }

  getCategoryBackgroundImage(slug: string) {
    return `${this.topCategoriesSignal()?.find((category) => category.slug === slug)?.image?.url}`;
  }

  onCategorySelection(slug: string): void {
    this.router.navigate(['/', 'categories', slug]);
  }
}
