import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { LinkType } from './link';
import { LibSize } from '../../types';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'a[libLink], button[libLink]',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styleUrl: './link.component.css',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkComponent {

  @Input()
  @HostBinding('attr.data-type')
  type: LinkType = 'default'

  @Input()
  @HostBinding('attr.data-size')
  size: LibSize = 'medium'

  @Input()
  @HostBinding('attr.data-size')
  weight: LibSize = 'medium'
}
