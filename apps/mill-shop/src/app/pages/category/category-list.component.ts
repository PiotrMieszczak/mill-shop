import { AsyncPipe, NgForOf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CategoryApiService } from '../../domain/category/services/category-api.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AsyncPipe, NgForOf], 
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent  {
  categoryApi = inject(CategoryApiService);
  categories$ = this.categoryApi.getCategories();

}
