import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paises-detalle',
  templateUrl: './paises-detalle.component.html',
  styleUrls: ['./paises-detalle.component.css']
})
export class PaisesDetalleComponent implements OnInit {

  @Input() pais;
  constructor() { }

  ngOnInit(): void {
    this.pais = {"name":"", "capital":""};
  }

}
