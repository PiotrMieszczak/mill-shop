import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { CategoryFacade } from '../../domain/category/facade';
import { Router } from '@angular/router';
import { CategoryCardComponent } from '../../shared/components/category-card/category-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss',
  imports: [CategoryCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListComponent implements OnInit {
  private categoryFacade = inject(CategoryFacade);
  private router = inject(Router);

  categoriesResource = this.categoryFacade.categoriesResource;
  categoriesSignal = computed(() => this.categoriesResource.value() || []);
  loadingSignal = computed(() => this.categoriesResource.isLoading());
  errorSignal = computed(() => this.categoriesResource.error());

  ngOnInit(): void {
    this.categoryFacade.loadCategories();
  }
}
