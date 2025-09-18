import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[Highlight-yellow]'
})
export class HighlightDirective {
  private element:ElementRef<HTMLDivElement>=inject(ElementRef)
  constructor() { 
    console.log('--HighlightDirective');
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }
}
