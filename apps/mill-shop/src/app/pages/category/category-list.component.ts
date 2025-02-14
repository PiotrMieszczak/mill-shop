import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { CategoryFacade } from '../../domain/category/facade';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './category-list.component.html',
  imports: [NgForOf, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
