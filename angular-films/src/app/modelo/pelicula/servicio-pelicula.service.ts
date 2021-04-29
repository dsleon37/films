import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pelicula } from 'src/app/controlador/pelicula/pelicula';
import { Actor } from 'src/app/controlador/pelicula/actor';
import { Director } from 'src/app/controlador/pelicula/director';
import { Categoria } from 'src/app/controlador/pelicula/categoria';


@Injectable({
  providedIn: 'root'
})
export class ServicioPeliculaService {
  private baseUrl = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) { }


  getFilmsListPaginate( thePage:number, thePageSize: number, theCategoryId: number): Observable<GetResponseFilms> {
    const searchUrl = `${this.baseUrl}/films`
                      +`&page=${thePage}&size=${thePageSize}`;
                      
    return this.httpClient.get<GetResponseFilms>(searchUrl);
  }



  getCategories(): Observable<GetResponseCategories> {
    const searchUrl = `${this.baseUrl}/categories`;                      
    return this.httpClient.get<GetResponseCategories>(searchUrl);
  }


  getActors(): Observable<GetResponseActors> {
    const searchUrl = `${this.baseUrl}/actors`;                      
    return this.httpClient.get<GetResponseActors>(searchUrl);
  }

  getDirectors(): Observable<GetResponseDirectors> {
    const searchUrl = `${this.baseUrl}/directors`;                      
    return this.httpClient.get<GetResponseDirectors>(searchUrl);
  }

}


interface GetResponseFilms {
  _embedded: {
    pelicula: Pelicula[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}


interface GetResponseActors {
  _embedded: {
    actor: Actor[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}

interface GetResponseDirectors {
  _embedded: {
    director: Director[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}


interface GetResponseCategories {
  _embedded: {
    category: Categoria[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}
