import { Component } from '@angular/core';
import { HighlightDirective } from '../directives/highlight.directive';
import { HighlightGreenDirective } from '../directives/highlight.green.directive';
import { HighlightHoverDirective } from '../directives/highlight-hover.directive';

@Component({
  selector: 'app-componente07',
 imports: [HighlightDirective, HighlightGreenDirective, HighlightHoverDirective],
  templateUrl: './componente07.html',
  styleUrl: './componente07.css'
})
export class Componente07 {

}
