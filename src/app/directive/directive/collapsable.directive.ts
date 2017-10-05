import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appCollapsable]'
})

export class CollapsableDirective {
  constructor() { }
  isCollapsed = false;
  @HostBinding('class.collapse') get collapsed() { return this.isCollapsed; }
  @HostListener('click') userClick() { this.isCollapsed = !this.isCollapsed; }
}
