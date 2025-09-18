import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-componente06-hijo',
  imports: [],
    template: `
    <div style="background: #e2ffdf; padding: 20px;">
      <h3>Componente Hijo</h3>
      <button (click)="enviarSaludo()">Saludar a Padre</button>
      <button (click)="enviarDespedida()">Despedirse</button>
    </div>
  `,
  styleUrl: './componente06-hijo.css'
})
export class Componente06Hijo {
  @Output() saludo = new EventEmitter<string>();
  @Output() despedida= new EventEmitter<string>();

  enviarSaludo(){
    this.saludo.emit('hola desde hijo');
  }

  enviarDespedida(){
    this.saludo.emit('Chau');
  }
}