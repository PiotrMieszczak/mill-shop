import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ProductFacadeService } from '../../../domain/product/facade';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  private productFacade = inject(ProductFacadeService);
  private route = inject(ActivatedRoute);

  productsSignal = this.productFacade.productsSignal;
  loadingSignal = this.productFacade.loadingSignal;
  errorSignal = this.productFacade.errorSignal;
  categorySignal = this.productFacade.categorySignal;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(map((params) => params.get('slug') || ''))
      .subscribe((slug) => {
        this.productFacade.getProductsByCategory(slug);
      });
  }
}
