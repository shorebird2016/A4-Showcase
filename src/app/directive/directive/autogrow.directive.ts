import {Directive, ElementRef, HostListener, Renderer} from '@angular/core';

@Directive({
  selector: '[appAutogrow]'
})

export class AutogrowDirective {
  constructor(private elem: ElementRef, private rndr: Renderer) { }
  @HostListener('focus') focus() {
    this.rndr.setElementClass(this.elem.nativeElement, 'focus', true);
  }
  @HostListener('blur') blur() {
    this.rndr.setElementClass(this.elem.nativeElement, 'focus', false);
  }
}
