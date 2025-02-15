import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent, ClickboxComponent } from '@mill-shop/design-system/components';
import { DomSanitizer } from '@angular/platform-browser';
import { Product } from '../../../domain/product/interfaces';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  standalone: true,
  imports: [ClickboxComponent, CurrencyPipe, ButtonComponent],
})
export class ProductCardComponent {
  private router = inject(Router);
  private sanitizer = inject(DomSanitizer);
  productSignal = input<Product>();
  categorySlug = input<string>();
  isLoadingSignal = input<boolean>(false);

  backgroundImageSignal(imageUrl: string | undefined) {
    if (!imageUrl) return;
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  // onClick(productSlug: string | undefined) {
  //   if (!productSlug) return;
  //   this.router.navigate(['/categories', this.categorySlug(), 'product', productSlug]);
  // }

  onClick(productSlug: string | undefined) {
    if (!productSlug) return;
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() =>
        this.router.navigate(['/categories', this.categorySlug(), 'product', productSlug]),
      );
  }
}
