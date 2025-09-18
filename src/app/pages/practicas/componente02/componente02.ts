import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-componente02',
  imports: [],
  templateUrl: './componente02.html',
  styleUrl: './componente02.css'
})
export class Componente02 implements OnChanges, OnInit, DoCheck, OnDestroy{
   public titulo;
  public nombre: string;
  public edad: number;
  public esCasado: boolean;
  public fechaNac: Date;
  public comodin:any;
  public frutas: Array<string>;

  constructor(){
    console.log('MiComponete02 --> costrucctor()');
    this.titulo = 'Mi componente 02';
    this.nombre = 'Lupe Torrez';
    this.edad =10;
    this.esCasado=false;
    this.fechaNac=new Date();
    this.comodin=100;
    this.frutas = ['Limon', 'Manzanas', 'Fresa'];
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Mi componente02 --> ngOnChanges()');
    // Obtener datos de componentes padre hijo
  }

  ngOnInit(): void {
    console.log('Mi componente02 --> ngOnInit()');
    //Obtener datos de un API Rest
  }

  ngDoCheck(): void {
     console.log('Mi componente02 --> ngDoCheck()');
    //Operaciones sencillas nada pesado
  }

  ngOnDestroy(): void {
    console.log('Mi componente02 --> ngOnDestroy()');
    //Operaciones para liberar recursos
  }

}