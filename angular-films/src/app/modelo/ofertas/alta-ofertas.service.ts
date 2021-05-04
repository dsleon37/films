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

  registerOffer(oferta: Oferta): Observable<any>{
    console.log('oferta', oferta);
    return this.httpClient.post(this.baseUrl, oferta)
    /*console.log('oferta', oferta);
    this.httpClient.post(this.baseUrl, oferta).subscribe({
      next: response =>{
        this.mensaje = "Se ha registrado correctamente la oferta.";
      },
      error: err => {
        this.mensajeErr = `Error al registrar oferta: `+err.message;
      }
    });*/
  }

  deleteOffer(id: number, oferta: Oferta) {
    console.log("Esto va dentro del servicio");
    console.log(id);
    console.log('oferta', oferta);
    const searchUrl = `${this.baseUrl}/${id}`;
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
