import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oferta } from 'src/app/controlador/ofertas/common/oferta';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AltaOfertasService {
  private baseUrl = 'http://localhost:8080/api/offers';


  constructor(private httpClient: HttpClient) { }
  getaltaOffersList(): Observable<Oferta[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.offers)
    )
  }

  registerOffer(oferta: Oferta): Observable<Oferta>{
    console.log('oferta', oferta);
    return this.httpClient.post<Oferta>(this.baseUrl, oferta);
  }
  deleteOffer(id:number) {
    let searchUrl = `${this.baseUrl}/offers/${id}`;
    this.httpClient.delete(searchUrl).subscribe(data => {
      console.log(data);
    });
  }
}

interface GetResponse {
  _embedded: {
    offers: Oferta[];
  }
}
