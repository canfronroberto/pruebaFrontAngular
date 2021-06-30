import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ViewsComponent } from './views/views.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DetalleComponent } from './views/detalle/detalle.component';
import { AppRoutingModule } from './app-routing.module';
import { NasaComponent } from './views/dashboard/nasa/nasa.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ViewsComponent,
    DashboardComponent,
    DetalleComponent,
    NasaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
