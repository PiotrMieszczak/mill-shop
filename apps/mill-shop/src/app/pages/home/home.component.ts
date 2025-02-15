import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HomeFacadeService } from '../../domain/home/facade';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private facade = inject(HomeFacadeService);

  homePageSignal = this.facade.homePageSignal;
  loadingSignal = this.facade.loadingSignal;
  errorSignal = this.facade.errorSignal;

  constructor() {
    this.facade.loadHomePage();
  }
}
