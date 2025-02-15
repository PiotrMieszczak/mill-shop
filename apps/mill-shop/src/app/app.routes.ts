import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'categories',
    loadComponent: () =>
      import('./pages/category/category-list.component').then((m) => m.CategoryListComponent),
  },
  {
    path: 'categories/:slug',
    loadComponent: () =>
      import('./pages/product/product-list/product-list.component').then(
        (m) => m.ProductListComponent,
      ),
  },
  {
    path: 'categories/:categorySlug/product/:productSlug',
    loadComponent: () =>
      import('./pages/product/product-details/product-details.component').then(
        (m) => m.ProductDetailsComponent,
      ),
  },
];
