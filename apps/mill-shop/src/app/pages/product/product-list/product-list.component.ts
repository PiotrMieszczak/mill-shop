import { ChangeDetectionStrategy, Component, effect, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductFacadeService } from '../../../domain/product/facade';
import { ProductCardComponent } from '../../../shared/components';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  imports: [ProductCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  private productFacade = inject(ProductFacadeService);
  private activeRouter = inject(ActivatedRoute);

  categorySlug = signal('');
  productsSignal = this.productFacade.productsSignal;
  loadingSignal = this.productFacade.isLoadingSignal;
  errorSignal = this.productFacade.hasErrorSignal;
  categorySignal = this.productFacade.categorySignal;

  superEffect = effect(() => {
    console.log('productsSignal', this.productsSignal());
  });
  ngOnInit(): void {
    this.categorySlug.set(this.activeRouter.snapshot.paramMap.get('slug') ?? '');
    this.productFacade.getProductsByCategory(this.categorySlug());
  }
}
