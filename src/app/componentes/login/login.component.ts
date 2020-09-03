import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router){}

  public user:string;
  public pw:string;

  ngOnInit(): void {
  }

  public Loguearse():void{
    this.user = (<HTMLInputElement>document.getElementById("user")).value
    this.pw = (<HTMLInputElement>document.getElementById("pw")).value
    if (this.user == "admin@mail.com" && this.pw == "1234")
      this.route.navigate(['bienvenida']);
    else
      this.route.navigate(['**']);
  }

}
