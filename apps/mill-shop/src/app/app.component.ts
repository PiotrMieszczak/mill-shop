import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './shared/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterModule, NavigationComponent],
})
export class AppComponent {}
