import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appZoomHover]'
})

// zoom-hover
export class ZoomHoverDirective {
  constructor(private _elem: ElementRef) {
    this.origFontSize = this._elem.nativeElement.fontSize; // TODO how to get font size
  }
  origFontSize;
  @Input() appZoomHover;
  @HostListener('mouseenter') zoom() {
    this._elem.nativeElement.style.fontSize = this.appZoomHover; // 2 * this.origFontSize; // TODO how to pass variable size in
    this._elem.nativeElement.style.border = '5px lightgray solid';
    this._elem.nativeElement.style.borderRadius = '10px';
  }
  @HostListener('mouseleave') unzoom() {
    this._elem.nativeElement.style.fontSize = '1em'; // this.origFontSize;
    this._elem.nativeElement.style.border = 'none';
    this._elem.nativeElement.style.borderRadius = '0';
  }

}
