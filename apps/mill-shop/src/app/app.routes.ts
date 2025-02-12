import { Route } from '@angular/router';
import { CategoryListComponent } from './pages/category/category-list.component';

export const appRoutes: Route[] = [
    { path: '', component: CategoryListComponent },
];
