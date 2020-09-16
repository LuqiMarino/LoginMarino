import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.css']
})
export class DetalleEntidadComponent implements OnInit {

  @Input() persona:any = { "Nombre": "", "Apellido": "", "Sexo":"", "email":"", "FechaNac": "", "FotoPerfil":"" };
  constructor() {
   }

  ngOnInit(): void {
    this.persona = { "Nombre": "", "Apellido": "", "Sexo":"", "email":"", "FechaNac": "", "FotoPerfil":"" };
  }

}
