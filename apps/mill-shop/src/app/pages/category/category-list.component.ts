import { NgForOf } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { CategoryFacade } from '../../domain/category/facade';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgForOf, RouterModule],
  templateUrl: './category-list.component.html',
})
export class CategoryListComponent implements OnInit {
  private categoryFacade = inject(CategoryFacade);

  categoriesResource = this.categoryFacade.categoriesResource;
  categoriesSignal = computed(() => this.categoriesResource.value() || []);
  loadingSignal = computed(() => this.categoriesResource.isLoading());
  errorSignal = computed(() => this.categoriesResource.error());

  ngOnInit(): void {
    this.categoryFacade.loadCategories();
  }
}
