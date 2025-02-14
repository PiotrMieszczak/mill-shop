import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductFacadeService } from '../../../domain/product/facade';

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.component.html',
  imports: [RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private facade = inject(ProductFacadeService);

  categorySlug = signal('');
  productSlug = signal('');

  productDetailsSignal = this.facade.productDetailsSignal;
  loadingSignal = this.facade.isLoadingSignal;
  errorSignal = this.facade.hasErrorSignal;
  relatedProductsSignal = this.facade.relatedProductsSignal;
  relatedProductsLoadingSignal = this.facade.relatedProductsLoadingSignal;
  relatedProductsErrorSignal = this.facade.relatedProductsErrorSignal;
  ngOnInit(): void {
    this.categorySlug.set(this.route.snapshot.paramMap.get('categorySlug') ?? '');
    this.productSlug.set(this.route.snapshot.paramMap.get('productSlug') ?? '');
    this.facade.getProductDetails(this.categorySlug(), this.productSlug());
  }
}
