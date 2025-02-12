import { Component, HostBinding, HostListener, Input } from '@angular/core';

@Component({
  selector: 'lib-clickbox',
  imports: [],
  templateUrl: './clickbox.component.html',
  styleUrl: './clickbox.component.scss'
})
export class ClickboxComponent {
  @Input()
  @HostBinding('class.disabled') 
  disabled = false;

  @HostBinding('class.hovered') isHovered = false;
  @HostBinding('class.clicked') isClicked = false;

  @HostListener('mouseenter') 
  onMouseEnter() {
    if (!this.disabled) this.isHovered = true;
  }

  @HostListener('mouseleave') 
  onMouseLeave() {
    this.isHovered = false;
    this.isClicked = false;
  }

  @HostListener('mousedown') 
  onMouseDown() {
    if (!this.disabled) this.isClicked = true;
  }

  @HostListener('mouseup') 
  onMouseUp() {
    this.isClicked = false;
  }
}
