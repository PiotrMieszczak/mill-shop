import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { HomeFacadeService } from '../../domain/home/facade';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private facade = inject(HomeFacadeService);

  homePageSignal = this.facade.homePageSignal;
  loadingSignal = this.facade.loadingSignal;
  errorSignal = this.facade.errorSignal;
  backgroundImageSignal = computed(() => `url(${this.homePageSignal()?.banner.url})`);
  constructor() {
    this.facade.loadHomePage();
    console.log('homePageSignal', this.homePageSignal());
  }
}
