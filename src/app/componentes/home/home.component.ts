import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MiServicioService } from '../../servicios/mi-servicio.service';
import { ApiServiceService } from '../../servicios/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public listadoPersonas = [];
  public personaSeleccionada;
  public menu:number;

  constructor(private route: Router, private miServicio: MiServicioService, private apiServicio: ApiServiceService){}

  ngOnInit(): void {
    //cargo lista personas
    this.apiServicio.obtenerPersonas().subscribe((personas: any) => {
      this.listadoPersonas = personas;
    }, error => {
      console.log('Error: ' + error);
    });

  }

  public Acceder(opcion:number){
    this.menu = opcion;
  }

  SeleccionarPersona(persona){
    this.personaSeleccionada = persona;
  }

}
