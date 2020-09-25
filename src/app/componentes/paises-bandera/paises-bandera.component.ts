import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paises-bandera',
  templateUrl: './paises-bandera.component.html',
  styleUrls: ['./paises-bandera.component.css']
})
export class PaisesBanderaComponent implements OnInit {

  @Input() region;
  @Input() listadoPaisesSegunRegion;
  @Output() emitirVerPais:EventEmitter<any> = new EventEmitter();

  constructor() { 
  }

  ngOnInit(): void {
  }

  VerPais(p){
    console.log("entro a ver pais bandera");
    this.emitirVerPais.emit(p);
  }

}
