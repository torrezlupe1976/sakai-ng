import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Highlight-hover]'
})
export class HighlightHoverDirective {
  private element=inject(ElementRef)
  private renderer = inject(Renderer2);

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.removeStyle(this.element.nativeElement, 'background-color');
  }

  constructor() {
  }
   
}
