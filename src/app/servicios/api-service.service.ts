import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  public obtenerPersonas(){
    return this.http.get("https://api.mocki.io/v1/570c5e5c");
  }

  public obtenerPaisesEuropa(){
    return this.http.get("https://restcountries.eu/rest/v2/region/europe");
  }

  public obtenerPaisesAsia(){
    return this.http.get("https://restcountries.eu/rest/v2/region/asia");
  }

  public obtenerPaisesAfrica(){
    return this.http.get("https://restcountries.eu/rest/v2/region/africa");
  }

}
