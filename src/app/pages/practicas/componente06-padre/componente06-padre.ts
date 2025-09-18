//import { Saludo } from '../../saludo/saludo';
import { Component } from '@angular/core';
import { Componente06Hijo } from '../componente06-hijo/componente06-hijo';

@Component({
  selector: 'app-componente06-padre',
  imports: [Componente06Hijo],
  template: `
    <div style="background: #e2ffdf; padding: 20px;">
      <h3>Componente Padre</h3>
      <p>Mensaje recibido: {{ mensaje}}</p>
      <app-componente06-hijo
        (saludo)="recibirSaludo($event)"
        (despedida)="recibirDespedida($event)"
      />
    </div>
  `,
  styleUrl: './componente06-padre.css'
})
export class Componente06Padre {
  mensaje: string = '';

  recibirSaludo(mensaje:string){
    this.mensaje = mensaje;
    console.log('Saludo recibido', this.mensaje)
  }

  recibirDespedida(mensaje:string){
    this.mensaje = mensaje;
    console.log('Despedida recibida', this.mensaje)
  }
}
