import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-componente08',
  imports: [RouterLink],
  templateUrl: './componente08.html',
  styleUrl: './componente08.css'
})
export class Componente08 {
  private readonly _router = inject(Router)

  navigateToComponente01():void{
    this._router.navigate(['/practicas/componente01'])
  }

  navigateToComponente02():void{
    this._router.navigateByUrl('/practicas/componente02')
  }

  redirectToComponente09():void{
    // PATHPARAMS
    this._router.navigate(['/practicas/componente09', 'Alex', 20]);
  }

  redirectToComponente10(): void {
    // QUERYPARAMS
    this._router.navigate(['/practicas/componente10'], {
      queryParams: { param_nombre: 'Jhon', param_edad: 25 },
    });
  }

}
