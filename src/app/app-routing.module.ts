import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListadoEntidadComponent } from './componentes/listado-entidad/listado-entidad.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bienvenida', component: BienvenidaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'personas/listado', component: ListadoEntidadComponent},
  {path: '**', component: ErrorComponent},
]

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
