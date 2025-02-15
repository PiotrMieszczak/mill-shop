import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { HomeFacadeService } from '../../domain/home/facade';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
