import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from 'src/app/controlador/pelicula/pelicula';
import { PeliculasLista } from 'src/app/controlador/pelicula/peliculas_lista';

@Injectable({
  providedIn: 'root'
})
export class MiListaService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) { }

  getFilmsMyList( idUser:number): Observable<GetResponseFilms> {
    const peliculaUrl = `${this.baseUrl}/films/search/findMyList?idUser=${idUser}`;
                      
    return this.httpClient.get<GetResponseFilms>(peliculaUrl);
  }

  getFilmsViews( idUser:number): Observable<GetResponseFilms> {
    const peliculaUrl = `${this.baseUrl}/films/search/findMyViews?idUser=${idUser}`;
                      
    return this.httpClient.get<GetResponseFilms>(peliculaUrl);
  }

  getFilmsFavorites( idUser:number): Observable<GetResponseFilms> {
    const peliculaUrl = `${this.baseUrl}/films/search/findMyFavorites?idUser=${idUser}`;
                      
    return this.httpClient.get<GetResponseFilms>(peliculaUrl);
  }

  getFilmsByFilm( idUser:number, idFilm:number): Observable<GetResponseFilmsList> {
    const peliculaUrl = `${this.baseUrl}/filmLists/search/findFilmListByFilm/?idUser=${idUser}&idFilm=${idFilm}`;
    return this.httpClient.get<GetResponseFilmsList>(peliculaUrl);
  }
  
  //Modificar filmLists si a existe un registro de esa pelicula
  pathGuardarPeliculaPath(idFilmList: number, filmList: PeliculasLista) {
    const searchUrl = `${this.baseUrl}/filmLists/${idFilmList}`;
    return this.httpClient.patch<Pelicula>(searchUrl, filmList);
  }

  //Modificar filmLists si a existe un registro de esa pelicula
  postGuardarPelicula(filmList: PeliculasLista) {
    const searchUrl = `${this.baseUrl}/filmLists/`;
    return this.httpClient.post<Pelicula>(searchUrl, filmList);
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

interface GetResponseFilmsList {
  _embedded: {
    filmLists: PeliculasLista[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}
