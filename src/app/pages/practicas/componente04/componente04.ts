import { CommonModule, registerLocaleData } from '@angular/common';
import { Component, LOCALE_ID } from '@angular/core';
import localeEsBo from '@angular/common/locales/es-BO'
import { AgePipe } from '../pipes/age-pipe';
registerLocaleData(localeEsBo)
@Component({
  selector: 'app-componente04',
  imports: [CommonModule, AgePipe],
  providers:[{provide: LOCALE_ID, useValue: 'es-BO'}],
  templateUrl: './componente04.html',
  styleUrl: './componente04.css'
})
export class Componente04 {
  nombreCompleto='Lupe Torrez Galarza';
  sueldo=45375.4561;
  avancePorcentaje =0.45;
  domicilio={zona:'Miraflores', calle:'Av. America', nro:123}
  myDate = new Date();
  myBirthday = new Date('2000-05-15');
  myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Esto es una promesa');
    }, 3000);
  });
}
