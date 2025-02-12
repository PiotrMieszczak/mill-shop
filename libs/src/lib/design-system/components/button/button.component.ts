import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { ButtonType } from './button';
import { LibSize } from '../../types';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input()
  @HostBinding('attr.data-type')
  type: ButtonType = 'primary';

  @Input()
  @HostBinding('attr.data-size')
  size: LibSize = 'medium';
}
