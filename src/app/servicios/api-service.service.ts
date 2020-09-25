import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  public obtenerPersonas(){
    return this.http.get(environment.urlApiPersonas);
  }

  public obtenerPaisesEuropa(){
    return this.http.get(environment.urlApiPaisesEuropa);
  }

  public obtenerPaisesAsia(){
    return this.http.get(environment.urlApiPaisesAsia);
  }

  public obtenerPaisesAfrica(){
    return this.http.get(environment.urlApiPaisesAfrica);
  }

}
