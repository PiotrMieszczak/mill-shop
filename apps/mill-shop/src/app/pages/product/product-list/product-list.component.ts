import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ProductFacadeService } from '../../../domain/product/facade';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  productFacade = inject(ProductFacadeService);
  route = inject(ActivatedRoute);

  productsSignal = this.productFacade.products$;
  loadingSignal = this.productFacade.loading$;
  errorSignal = this.productFacade.error$;

  categorySignal = computed(() => this.productsSignal().shift()?.category);
  ngOnInit(): void {
    this.getProductsByCategory();
  }

  getProductsByCategory(): void {
    this.route.paramMap
      .pipe(
        map((params) => {
          const categorySlug = params.get('slug');
          if (!categorySlug) {
            return;
          }
          console.log(categorySlug);
          this.productFacade.getProductsByCategory(categorySlug);
        })
      )
      .subscribe();
  }
}
