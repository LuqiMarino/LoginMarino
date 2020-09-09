import { Component, OnInit } from '@angular/core';
import { MiServicioService } from '../../servicios/mi-servicio.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {
  public mailLST;
  public pwLST;
  public mailSrv;
  public pwSrv;

  constructor(private miServicio: MiServicioService) { }

  ngOnInit(): void {    
    //LocalStorage
    var item = localStorage.getItem('usuarios');
    var userLST = JSON.parse(item);
    this.mailLST = userLST["user"];
    this.pwLST = userLST["password"];

    //Servicio
    var userSRV = JSON.parse(this.miServicio.user);
    this.mailSrv = userSRV["user"];
    this.pwSrv = userSRV["password"];
    
  }

}
