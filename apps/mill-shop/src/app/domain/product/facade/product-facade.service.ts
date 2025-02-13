import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Observable, tap } from 'rxjs';
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

  getProductsByCategory(slug: string): Observable<Product[]> {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    return this.productApiService.getProductsByCategory(slug).pipe(
      tap({
        next: (products) => {
          this.productsSignal.set(products);
          this.loadingSignal.set(false);
        },
        error: (error) => {
          this.errorSignal.set(error.message);
          this.loadingSignal.set(false);
        },
      })
    );
  }
}
