import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oferta } from 'src/app/controlador/ofertas/common/oferta';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  private baseUrl = 'http://localhost:8080/api/offers';

  constructor(private httpClient: HttpClient) { }

  getOffersList(): Observable<Oferta[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.offers)
    )
  }
}

interface GetResponse {
  _embedded: {
    offers: Oferta[];
  }
}
