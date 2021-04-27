import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../common/film';


@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private  baseUrl= 'http//localhost:8080/api/film';

  constructor(private httpClient: HttpClient) {}

    getFilmList(): Observable<Film[]>{
      return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
        map(response => response._embedded.film)
      );

   }

}

interface GetResponse{
  _embedded:{
    film: Film[];
  }
}