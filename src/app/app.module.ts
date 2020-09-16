import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ListadoEntidadComponent } from './componentes/listado-entidad/listado-entidad.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { DetalleEntidadComponent } from './componentes/detalle-entidad/detalle-entidad.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    BienvenidaComponent,
    ListadoEntidadComponent,
    HomeComponent,
    DetalleEntidadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
