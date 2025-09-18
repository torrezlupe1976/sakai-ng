import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-componente01',
  imports: [FormsModule],
  templateUrl: './componente01.html',
  styleUrl: './componente01.css'
})

export class Componente01 {
  public titulo='Mi componente 01';
  public nombre='Lupe Torrez';
  public deshabilitar=true;
  public inputMessage='';
  public inputNombre='';

  constructor(){
    setTimeout(() => {
      this.deshabilitar=false;
    }, 5000); //5 seg de espera
  }

  clickSaludar():void{
    console.log('Saludando a ' + this.nombre);
  }

  eventoInput(event: Event ):void{
    const inputEvent = event as InputEvent;
    console.log('Evento input...', inputEvent.data);
    this.inputMessage += inputEvent.data;
  }

}
