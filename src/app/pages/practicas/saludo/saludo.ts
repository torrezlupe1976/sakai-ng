import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  imports: [],
  template: `
            <div>
              <h2>Componente Saludo</h2>
            </div> 
  `,
  styles: `
  div{background:blue;}
  h2 {color:white}
  `
})
export class Saludo implements OnInit, OnDestroy{
  constructor(){
    console.log('Se ejecuta el contructor()');
  }

  ngOnInit(): void {
    console.log('ComponenteSaludo >ngOnInit()');
  }
  ngOnDestroy(): void {
    console.log('ComponenteSaludo >ngOnDestroy()');
  }

}
