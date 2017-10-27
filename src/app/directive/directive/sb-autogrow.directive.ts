import {AfterViewInit, Directive, ElementRef, HostListener, Renderer, Renderer2} from '@angular/core';

@Directive({
  selector: '[appSbAutogrow]'
})

export class SbAutogrowDirective {
  constructor(private elem: ElementRef, private rdr: Renderer) { }

  @HostListener('focus') focusing() {
    // this.rdr.setElementClass(this.elem.nativeElement, 'focus', true);
    this.rdr.setElementStyle(this.elem.nativeElement, 'width', '400px');
    this.rdr.setElementStyle(this.elem.nativeElement, 'height', '35px');
    this.rdr.setElementStyle(this.elem.nativeElement, 'backgroundColor', '#defeea');
  }
  @HostListener('blur') defocusing() {
    // this.rdr.setElementClass(this.elem.nativeElement, 'focus', false);
    this.rdr.setElementStyle(this.elem.nativeElement, 'width', '200px');
    this.rdr.setElementStyle(this.elem.nativeElement, 'height', '30px');
    this.rdr.setElementStyle(this.elem.nativeElement, 'backgroundColor', 'white');
  }
}
