import  { NgModule }  from  '@angular/core';
import  { RouterModule, Routes }  from  '@angular/router';

import { DetalleComponent } from './views/detalle/detalle.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

const  routes:  Routes  = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detalle', component: DetalleComponent },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export  class  AppRoutingModule  {  }
