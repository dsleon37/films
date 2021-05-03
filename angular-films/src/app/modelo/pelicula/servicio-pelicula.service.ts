import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pelicula } from 'src/app/controlador/pelicula/pelicula';
import { Actor } from 'src/app/controlador/pelicula/actor';
import { Director } from 'src/app/controlador/pelicula/director';
import { Categoria } from 'src/app/controlador/pelicula/categoria';
import { Film } from 'src/app/controlador/pelicula/alta-pelicula/film';


@Injectable({
  providedIn: 'root'
})
export class ServicioPeliculaService {
  


  static getCategories() {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:8080/api';
  private addFilmUrl = 'http://localhost:8080/api/films';
  constructor(private httpClient: HttpClient) { }

  
  postFilm( film:Film):Observable<Film>{
    console.log(film);
    return this.httpClient.post<Film>(this.addFilmUrl,film);
    
  }

  getfilmliscategori(theCategiryid:number):Observable<Categoria[]>{

    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategiryid}`;

    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.categoria)
    );
  }

  //Trae peliculas
  getFilmsListPaginate( thePage:number, thePageSize: number): Observable<GetResponseFilms> {
    const searchUrl = `${this.baseUrl}/films`;
                      
    return this.httpClient.get<GetResponseFilms>(searchUrl);
  }
  
  //Trae peliculas por categoria
  getFilmsListPaginateByCategories( thePage:number, thePageSize: number,categoryId:number): Observable<GetResponseFilms> {
    const searchUrl = `${this.baseUrl}/films/search/findByCategoryId?id=${categoryId}`;
                      
    return this.httpClient.get<GetResponseFilms>(searchUrl);
  }

  //Trae pelicula por id
  getPelicula(idFilm:number): Observable<Pelicula>{
    const peliculaUrl = `${this.baseUrl}/films/${idFilm}`;
    return this.httpClient.get<Pelicula>(peliculaUrl);
  }

  //Trae categoria de una pelicula
  getCategoriaPelicula(idFilm:number): Observable<GetResponseCategoryFilm>{
    const peliculaUrl = `${this.baseUrl}/categories/search/categoryFilm?idFilm=${idFilm}`;
    return this.httpClient.get<GetResponseCategoryFilm>(peliculaUrl);
  }

  //Filtra pelicula por palabra clave
  getFilmsListByKeyWord(keyword:string): Observable<GetResponseFilms>{
    const peliculaUrl = `${this.baseUrl}/films/search/findByTitleContaining?title=${keyword}`;
    return this.httpClient.get<GetResponseFilms>(peliculaUrl);
  }

  //Guarda modificación de pelicula
  pathPelicula(idFilm:number, pelicula:Pelicula): Observable<Pelicula>{
    const searchUrl = `${this.baseUrl}/films/${idFilm}`;
    return this.httpClient.patch<Pelicula>(searchUrl, pelicula);
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

  getActor(idActor:number): Observable<Actor>{
    const actorUrl = `${this.baseUrl}/actors/${idActor}`;
    return this.httpClient.get<Actor>(actorUrl);
  }

  getDirector(idDirector:number): Observable<Actor>{
    const directorUrl = `${this.baseUrl}/directors/${idDirector}`;
    return this.httpClient.get<Director>(directorUrl);
  }

}

interface GetResponse{
  _embedded:{
    categoria: Categoria[];
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
interface GetResponseCategoryFilm {
  _embedded: {
    categories: Categoria [];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}
