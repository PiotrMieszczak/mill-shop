import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductFacadeService } from '../../../domain/product/facade';
import { ClickboxComponent, LinkComponent } from '@mill-shop/design-system/components';
import { DomSanitizer } from '@angular/platform-browser';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  imports: [ClickboxComponent, CurrencyPipe, LinkComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  private productFacade = inject(ProductFacadeService);
  private activeRouter = inject(ActivatedRoute);
  private router = inject(Router);
  private sanitizer = inject(DomSanitizer);

  categorySlug = signal('');
  productsSignal = this.productFacade.productsSignal;
  loadingSignal = this.productFacade.isLoadingSignal;
  errorSignal = this.productFacade.hasErrorSignal;
  categorySignal = this.productFacade.categorySignal;

  ngOnInit(): void {
    this.categorySlug.set(this.activeRouter.snapshot.paramMap.get('slug') ?? '');
    this.productFacade.getProductsByCategory(this.categorySlug());
  }

  backgroundImageSignal(imageUrl: string) {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  onClick(productSlug: string) {
    this.router.navigate(['/categories', this.categorySignal()?.slug, 'product', productSlug]);
  }
}
