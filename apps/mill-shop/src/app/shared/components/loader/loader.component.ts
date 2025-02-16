import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  standalone: true,
})
export class LoaderComponent {
  isLoadingSignal = input<boolean>();

  isVisible = computed(() => this.isLoadingSignal());
}
