import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Highlight-green]'
})
export class HighlightGreenDirective {
  private element:ElementRef<HTMLDivElement>=inject(ElementRef)
  constructor(private renderer: Renderer2) { 
    console.log('--HighlightDirective');
    //this.element.nativeElement.style.backgroundColor = 'yellow';
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'green');
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');}
}
