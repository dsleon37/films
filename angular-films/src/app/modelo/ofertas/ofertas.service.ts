import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Oferta } from 'src/app/controlador/ofertas/common/oferta';
import { Suscriptor } from 'src/app/controlador/ofertas/common/suscriptor';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  aplicarOferta(value: any) {
    console.log(value);
  }

  private baseUrl = 'http://localhost:8080/api/offers';
  private baseUrlSubscriber = 'http://localhost:8080/api/subscriber';

  totalPoints: Subject<number> = new BehaviorSubject<number>(0);

  constructor(private httpClient: HttpClient) { }
  getOffersList(): Observable<Oferta[]> {

    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.offers)
    )
  }

  getOffers(idOferta:number): Observable<Oferta>{
    const ofertaUrl = `${this.baseUrl}/${idOferta}`;
    return this.httpClient.get<Oferta>(ofertaUrl);
  }

  aplicarOffer(suscriptor: Suscriptor): Observable<any>{
    console.log('suscriptor', suscriptor);
    console.log('suscriptor', this.baseUrlSubscriber);
    return this.httpClient.post(this.baseUrlSubscriber, suscriptor)
  }
}

interface GetResponse {
  _embedded: {
    offers: Oferta[];
  }
}
