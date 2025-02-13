import { NgForOf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CategoryFacade } from '../../domain/category/facade';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgForOf, RouterModule],
  templateUrl: './category-list.component.html',
})
export class CategoryListComponent implements OnInit {
  categoryFacade = inject(CategoryFacade);
  categoriesSignal = this.categoryFacade.categories$;
  loadingSignal = this.categoryFacade.loading$;
  errorSignal = this.categoryFacade.error$;

  ngOnInit() {
    this.categoryFacade.loadCategories();
  }
}
