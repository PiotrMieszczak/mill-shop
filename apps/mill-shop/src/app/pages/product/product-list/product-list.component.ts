import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductFacadeService } from '../../../domain/product/facade';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  imports: [RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  private productFacade = inject(ProductFacadeService);
  private route = inject(ActivatedRoute);

  categorySlug = signal('');
  productsSignal = this.productFacade.productsSignal;
  loadingSignal = this.productFacade.isLoadingSignal;
  errorSignal = this.productFacade.hasErrorSignal;
  categorySignal = this.productFacade.categorySignal;

  ngOnInit(): void {
    this.categorySlug.set(this.route.snapshot.paramMap.get('slug') ?? '');
    this.productFacade.getProductsByCategory(this.categorySlug());
  }
}
