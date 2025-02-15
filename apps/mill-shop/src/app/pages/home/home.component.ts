import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { HomeFacadeService } from '../../domain/home/facade';
import { ClickboxComponent, LinkComponent } from '@mill-shop/design-system/components';
import { RouterModule } from '@angular/router';

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

  homePageSignal = this.facade.homePageSignal;
  loadingSignal = this.facade.loadingSignal;
  errorSignal = this.facade.errorSignal;
  backgroundImageSignal = computed(() => `url(${this.homePageSignal()?.banner.url})`);

  topCategoriesSignal = this.facade.topCategoriesSignal;
  topLoadingSignal = this.facade.topLoadingSignal;
  topErrorSignal = this.facade.topErrorSignal;

  ngOnInit(): void {
    this.facade.loadHomePage();
    this.facade.getTopCategories();
  }
}
