import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {

  @Input() listadoPersonas;
  @Output() emitirVerPersona:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  VerPersona(p){
    this.emitirVerPersona.emit(p);
  }

}
