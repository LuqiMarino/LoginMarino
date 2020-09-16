import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private url = 'https://api.mocki.io/v1/570c5e5c';

  constructor(private http: HttpClient) { }

  public obtenerPersonas(){
    return this.http.get(this.url);
  }
}
