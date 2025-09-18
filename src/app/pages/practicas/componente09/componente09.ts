import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { __param } from 'tslib';

@Component({
  selector: 'app-componente09',
  imports: [],
  templateUrl: './componente09.html',
  styleUrl: './componente09.css'
})
export class Componente09 implements OnInit, OnDestroy{
  
  public nombre:string='';
  public edad:number=0;

  private _activatedRoute = inject(ActivatedRoute);
  private sub? : Subscription;

  ngOnInit(): void {
    this.sub = this._activatedRoute.paramMap.subscribe((params)=>{
      this.nombre=params.get('param_nombre') ?? '';
      this.edad =Number(params.get('param_edad'));
    });
    console.log('******OBTENER DATOS CON SNAPSHOT');
    console.log('DATOS OBTENIDOS MEDIANTE SHAPSHOT =>', this._activatedRoute.snapshot.params)
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}