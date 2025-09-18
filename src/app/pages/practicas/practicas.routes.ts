import { Routes } from '@angular/router';
import { Saludo } from './saludo/saludo';
import { Componente01 } from './componente01/componente01';
import { Componente04 } from './componente04/componente04';
import { Componente05 } from './componente05/componente05';
import { Componente06 } from './componente06/componente06';
import { Componente07 } from './componente07/componente07';
import { Componente08 } from './componente08/componente08';
import { Componente09 } from './componente09/componente09';
import { Componente10 } from './componente10/componente10';

export const practicasRoutes: Routes = [
  { path: 'saludo', component: Saludo },
  { path: 'componente01', component: Componente01 }, // dashboard/componente01/
  {
    path: 'componente02',
    loadComponent: () => import('./componente02/componente02').then((c) => c.Componente02),
  },
  {
    path: 'componente03',
    loadComponent: () => import('./componente03/componente03'),
  },
  { path: 'componente04', component: Componente04 },
  { path: 'componente05', component: Componente05 },
  { path: 'componente06', component: Componente06 },
  { path: 'componente07', component: Componente07 },
  { path: 'componente08', component: Componente08 },
  { path: 'componente09/:param_nombre/:param_edad', component: Componente09 },
  { path: 'componente10', component: Componente10 },
  {
    path: '', // Ruta hija por defecto /dashboard
    redirectTo: 'saludo',
    pathMatch: 'full',
  },
];
