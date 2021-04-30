import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  
  static getCategories() {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:8080/api';
  
  constructor(private httpClient: HttpClient) { }


  getFilmsListPaginate( thePage:number, thePageSize: number): Observable<GetResponseFilms> {
    const searchUrl = `${this.baseUrl}/films`;
                      
    return this.httpClient.get<GetResponseFilms>(searchUrl);
  }

  getFilmsListPaginateByCategories( thePage:number, thePageSize: number,categoryId:number): Observable<GetResponseFilms> {
    const searchUrl = `${this.baseUrl}/films/search/findByCategoryId?id=${categoryId}`;
                      
    return this.httpClient.get<GetResponseFilms>(searchUrl);
  }

  getPelicula(idFilm:number): Observable<Pelicula>{
    const peliculaUrl = `${this.baseUrl}/films/${idFilm}`;
    return this.httpClient.get<Pelicula>(peliculaUrl);
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

  getActorsOfFilm(filmId:number){
    const searchUrl = `${this.baseUrl}/films/${filmId}/actores`;                      
    return this.httpClient.get<GetResponseActors>(searchUrl);
  }
  getDirectorsOfFilm(filmId:number){
    const searchUrl = `${this.baseUrl}/films/${filmId}/directores`;                      
    return this.httpClient.get<GetResponseDirectors>(searchUrl);
  }
}

interface GetResponseFilms {
  _embedded: {
    films: Pelicula[];
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
    actors: Actor[];
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
    directors: Director[];
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
    categories: Categoria[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}
