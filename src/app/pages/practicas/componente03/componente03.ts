import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Saludo } from '../saludo/saludo';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'app-componente03',
  imports: [CommonModule, Saludo],

  templateUrl: './componente03.html',
  styleUrl: './componente03.css'
})
export default class Componente03 implements OnInit{

  isActive = false;
  hasError = false;
  status = 'PENDING';

  textColor = 'black';
  fontSise = 16;
  bgColor ='#f0f0f0';
  paddingSize=10;

  score =75;

  tareaArray: Tarea []=[];

  ngOnInit(): void {
    this.tareaArray = [
      {id:1,
       nombre: 'Aprender HTML',
       estado: true,
       prioridad: 'media',
       fechaVencimiento: new Date(),
      },
       {id:2,
       nombre: 'Aprender CSS',
       estado: false,
       prioridad: 'baja',
       fechaVencimiento: new Date(),
      },
      {id:3,
       nombre: 'Aprender JAVA script',
       estado: true,
       prioridad: 'media',
       fechaVencimiento: new Date(),
      },
      {id:3,
       nombre: 'Aprender TYPE Script',
       estado: true,
       prioridad: 'alta',
       fechaVencimiento: new Date(),
      },
      {id:3,
       nombre: 'Aprender ANGULAR',
       estado: true,
       prioridad: 'alta',
       fechaVencimiento: new Date(),
      },
    ]
  }

  toggleActive(){
    this.isActive = !this.isActive;
  }

  toggleError(){
    this.hasError = !this.hasError;
  }

  toggleStatus(){
    if(this.status !== 'COMPLETED'){
      this.status = 'COMPLETED';
    }else{
      this.status = 'PENDING';
    }
  }

  changeColor(color:string):void{
    this.textColor = color;
  }

  increaseSize(){
    this.fontSise +=2;
  }
}
