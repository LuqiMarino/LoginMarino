import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MiServicioService } from '../../servicios/mi-servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private miServicio: MiServicioService){}

  public user:string;
  public pw:string;

  ngOnInit(): void {
  }

  public Loguearse():void{
    this.user = (<HTMLInputElement>document.getElementById("user")).value
    this.pw = (<HTMLInputElement>document.getElementById("pw")).value
    if (this.user == "admin@mail.com" && this.pw == "1234"){
      var objeto = {"user":this.user, "password":this.pw};
      var objetoSTR = JSON.stringify(objeto);
      localStorage.setItem('usuarios', objetoSTR);
      this.miServicio.user = objetoSTR;
      this.route.navigate(['bienvenida']);
    }
      
    else
      this.route.navigate(['**']);
    
  }

}
