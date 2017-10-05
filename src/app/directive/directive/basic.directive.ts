import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverColor]'
})

export class BasicDirective {
  constructor(private elem: ElementRef) { }
  @Input() leaveColor; // second parameter
  @Input() appHoverColor; // use same name as first parameter
  @HostListener('mouseenter') onmouseEnter() { this.highlight(this.appHoverColor); }
  @HostListener('mouseleave') onmouseLeave() { this.highlight(this.leaveColor); }
  highlight(color) {
    this.elem.nativeElement.style.backgroundColor = color;
  }
}
