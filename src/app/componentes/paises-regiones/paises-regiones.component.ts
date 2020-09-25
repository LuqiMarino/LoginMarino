import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-paises-regiones',
  templateUrl: './paises-regiones.component.html',
  styleUrls: ['./paises-regiones.component.css']
})
export class PaisesRegionesComponent implements OnInit {

  public regionSeleccionada;
  public url;
  @Output() emitirDevolverRegion:EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {  
    this.regionSeleccionada = "Europa";
    this.url = environment.urlApiPaisesEuropa;
    this.SeleccionarRegion(1);  
  }

  SeleccionarRegion(opc:number){
    switch(opc){
      case 1:
        this.regionSeleccionada = "Europa";
        this.url = environment.urlApiPaisesEuropa;
        break;
      case 2:
        this.regionSeleccionada = "Asia";
        this.url = environment.urlApiPaisesAsia;
        break;
      case 3:
        this.regionSeleccionada = "Africa";
        this.url = environment.urlApiPaisesAfrica;
        break;
    }
    this.emitirDevolverRegion.emit(this.regionSeleccionada);
  }

}
