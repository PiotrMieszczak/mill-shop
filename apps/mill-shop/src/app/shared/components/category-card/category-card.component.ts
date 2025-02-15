import { Component, EventEmitter, Output, computed, inject, input } from '@angular/core';
import { Category } from '../../interfaces';
import { Router } from '@angular/router';
import { ClickboxComponent } from '@mill-shop/design-system/components';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss',
  standalone: true,
  imports: [ClickboxComponent],
})
export class CategoryCardComponent {
  private router = inject(Router);
  private sanitizer = inject(DomSanitizer);
  categorySignal = input<Category>();
  isLoadingSignal = input<boolean>(false);

  @Output() categorySelected = new EventEmitter<string>();

  backgroundImageSignal() {
    return this.sanitizer.bypassSecurityTrustUrl(`${this.categorySignal()?.image?.url || ''}`);
  }

  onClick() {
    if (!this.categorySignal()) {
      return;
    }
    this.router.navigate(['/', 'categories', this.categorySignal()?.slug]);
  }
}
