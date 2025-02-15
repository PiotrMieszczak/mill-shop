import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { LinkType, LinkWeight } from './link';
import { LibSize } from '../../types';

@Component({
  selector: 'a[libLink], button[libLink]',
  standalone: true,
  template: `
    <ng-content></ng-content>
  `,
  styleUrl: './link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  @Input()
  @HostBinding('attr.data-type')
  type: LinkType = 'default';

  @Input()
  @HostBinding('attr.data-size')
  size: LibSize = 'medium';

  @Input()
  @HostBinding('attr.data-weight')
  weight: LinkWeight = 'bold';
}
