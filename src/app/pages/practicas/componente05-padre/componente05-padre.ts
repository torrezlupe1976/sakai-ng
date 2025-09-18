import { CommonModule } from '@angular/common';
import { Usuario } from '../models/usuario.model';
import { Component } from '@angular/core';
import { Componente05Hijo } from '../componente05-hijo/componente05-hijo';

@Component({
  selector: 'app-componente05-padre',
  imports: [CommonModule, Componente05Hijo],
  template: `
    <div style="background: #e2ffdf; padding: 20px;">
      <h3>Componete Padre</h3>
      <p>{{usuario |json}}</p>
      <app-componente05-hijo
        [nombre] = "usuario.nombre"
        [edad] = "usuario.edad"
        [esActivo]="usuario.esActivo"
      />      
    </div>
  `,
  styleUrl: './componente05-padre.css'
})
export class Componente05Padre {
  usuario:Usuario;

  constructor(){
    this.usuario={
      nombre: 'Lupe Torrez',
      edad: 20,
      esActivo: true,
    }
  }
}
