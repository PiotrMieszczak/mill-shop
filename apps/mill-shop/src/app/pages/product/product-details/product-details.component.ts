import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductFacadeService } from '../../../domain/product/facade';
import { CountdownTimerComponent } from './components/countdown-timer.component';
import { LoaderComponent, ProductCardComponent } from '../../../shared/components';
import { ButtonComponent } from '@mill-shop/design-system/components';
import { CurrencyPipe } from '@angular/common';
import { BreakpointService } from '../../../shared/services';

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  imports: [
    RouterModule,
    CountdownTimerComponent,
    ProductCardComponent,
    ButtonComponent,
    CurrencyPipe,
    LoaderComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private facade = inject(ProductFacadeService);
  private bpService = inject(BreakpointService);

  categorySlug = signal('');
  productSlug = signal('');

  productDetailsSignal = this.facade.productDetailsSignal;
  loadingSignal = this.facade.isLoadingSignal;
  errorSignal = this.facade.hasErrorSignal;
  relatedProductsSignal = this.facade.relatedProductsSignal;
  relatedProductsLoadingSignal = this.facade.relatedProductsLoadingSignal;
  relatedProductsErrorSignal = this.facade.relatedProductsErrorSignal;
  isDesktopSignal = this.bpService.isDesktop;
  ngOnInit(): void {
    this.categorySlug.set(this.route.snapshot.paramMap.get('categorySlug') ?? '');
    this.productSlug.set(this.route.snapshot.paramMap.get('productSlug') ?? '');
    this.facade.getProductDetails(this.categorySlug(), this.productSlug());
  }
}
