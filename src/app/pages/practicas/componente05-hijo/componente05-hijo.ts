import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente05-hijo',
  imports: [],
  template: `
    <div style="background: #beeeff; padding: 20px;">
      <h3>Datos del Componente Hijo</h3>
      <p>Nombre: {{ nombre }}</p>
      <p>Edad: {{ edad }}</p>
      <p>Activo: {{ esActivo }}</p>
    </div>
  `,
  styleUrl: './componente05-hijo.css'
})
export class Componente05Hijo {
  //propiedades que reciben datos desde el componete padre
 @Input() nombre: string = '';
 @Input() edad: number=0;
 @Input() esActivo: boolean=false;

}
