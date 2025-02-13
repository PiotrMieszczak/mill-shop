import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { tap } from 'rxjs';
import { ProductApiService } from '../services/product-api.service';
import { Product } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class ProductFacadeService {
  private productApiService = inject(ProductApiService);
  private productsSignal: WritableSignal<Product[]> = signal([]);
  private loadingSignal: WritableSignal<boolean> = signal(false);
  private errorSignal: WritableSignal<string | null> = signal(null);

  products$ = this.productsSignal;
  loading$ = this.loadingSignal;
  error$ = this.errorSignal;

  getProductsByCategory(slug: string): void {
    this.productApiService
      .getProductsByCategory(slug)
      .pipe(tap(() => this.loadingSignal.set(true)))
      .subscribe({
        next: (products) => {
          this.productsSignal.set(products);
          this.loadingSignal.set(false);
        },
        error: (error) => {
          this.errorSignal.set(error.message);
          this.loadingSignal.set(false);
        },
      });
  }
}
