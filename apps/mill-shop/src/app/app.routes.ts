import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/category/category-list.component').then((m) => m.CategoryListComponent),
  },
  {
    path: 'category/:slug',
    loadComponent: () =>
      import('./pages/product/product-list/product-list.component').then(
        (m) => m.ProductListComponent,
      ),
  },
  {
    path: 'category/:categorySlug/product/:productSlug',
    loadComponent: () =>
      import('./pages/product/product-details/product-details.component').then(
        (m) => m.ProductDetailsComponent,
      ),
  },
];
