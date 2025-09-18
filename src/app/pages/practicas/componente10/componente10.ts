import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-componente10',
  imports: [],
  templateUrl: './componente10.html',
  styleUrl: './componente10.css'
})
export class Componente10 implements OnInit, OnDestroy {
 public nombre: string = '';
  public edad: number = 0;

  private _activatedRoute = inject(ActivatedRoute);
  private sub?: Subscription;

  ngOnInit(): void {
    this.sub = this._activatedRoute.queryParamMap.subscribe((params) => {
      this.nombre = params.get('param_nombre') ?? '';
      this.edad = Number(params.get('param_edad'));
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
