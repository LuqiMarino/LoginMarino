import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ApiServiceService } from '../../servicios/api-service.service';

@Component({
  selector: 'app-paises-home',
  templateUrl: './paises-home.component.html',
  styleUrls: ['./paises-home.component.css']
})
export class PaisesHomeComponent implements OnInit {

  public listaPaisesEuropa;
  public listaPaisesAsia;
  public listaPaisesAmericas;
  public listaPaisesAfrica;
  public regionSeleccionada;
  public listadoSegunRegion;
  public paisSeleccionado;

  constructor(private apiServicio: ApiServiceService) { }

  ngOnInit(): void {
    this.regionSeleccionada = "Europa";

    //cargo lista paises
    this.apiServicio.obtenerPaisesEuropa().subscribe((paises: any) => {
      this.listaPaisesEuropa = paises;
    }, error => {
      console.log('Error: ' + error);
    });

    this.apiServicio.obtenerPaisesAsia().subscribe((paises: any) => {
      this.listaPaisesAsia = paises;
    }, error => {
      console.log('Error: ' + error);
    });

    this.apiServicio.obtenerPaisesAfrica().subscribe((paises: any) => {
      this.listaPaisesAfrica = paises;
    }, error => {
      console.log('Error: ' + error);
    });

  }

  DevolverRegion(region){
    
    this.regionSeleccionada = region;
    switch(region){
      case "Europa":
        this.listadoSegunRegion = this.listaPaisesEuropa;
        break;
      case "Asia":
        this.listadoSegunRegion = this.listaPaisesAsia;
        break;
      case "Africa":
        this.listadoSegunRegion = this.listaPaisesAfrica;
        break;
    }
  }

  SeleccionarPais(p){
    console.log("entro a selec pais home " + p.name);
    this.paisSeleccionado = p;
  }

}
