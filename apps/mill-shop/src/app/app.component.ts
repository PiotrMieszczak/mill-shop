import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ButtonComponent, ClickboxComponent } from '@mill-shop/design-system';

@Component({
  imports: [NxWelcomeComponent, RouterModule, ButtonComponent, ClickboxComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mill-shop';
}
