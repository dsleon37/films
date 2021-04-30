import { GuardarP } from './../../pelicula/alta-pelicula/guardar-p';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardarService {

  private guardarPeUrl='http://localhost:8080/api';

  constructor(private HttpClient: HttpClient) { }


  placeOrder(guardarP: GuardarP): Observable<any>{
    return this.HttpClient.post<GuardarP>(this.guardarPeUrl,guardarP);
  }
}
