import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LinkComponent } from '@mill-shop/design-system/components';

@Component({
  selector: 'app-navigation',
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  imports: [LinkComponent, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  isScrolled = signal(false);

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }
}
