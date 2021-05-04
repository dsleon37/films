import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pelicula } from 'src/app/controlador/pelicula/pelicula';
import { Actor } from 'src/app/controlador/pelicula/actor';
import { Director } from 'src/app/controlador/pelicula/director';
import { Categoria } from 'src/app/controlador/pelicula/categoria';
import { ActorPelicula } from 'src/app/controlador/pelicula/actor-pelicula';
import { DirectorPelicula } from 'src/app/controlador/pelicula/director-pelicula';

@Injectable({
  providedIn: 'root'
})
export class ServicioPeliculaService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) { }

  //Trae peliculas
  getFilmsListPaginate(thePage: number, thePageSize: number): Observable<GetResponseFilms> {
    const searchUrl = `${this.baseUrl}/films`;

    return this.httpClient.get<GetResponseFilms>(searchUrl);
  }

  //Trae peliculas por categoria
  getFilmsListPaginateByCategories(thePage: number, thePageSize: number, categoryId: number): Observable<GetResponseFilms> {
    const searchUrl = `${this.baseUrl}/films/search/findByCategoryId?id=${categoryId}`;

    return this.httpClient.get<GetResponseFilms>(searchUrl);
  }

  //Trae pelicula por id
  getPelicula(idFilm: number): Observable<Pelicula> {
    const peliculaUrl = `${this.baseUrl}/films/${idFilm}`;
    return this.httpClient.get<Pelicula>(peliculaUrl);
  }

  //Trae categoria de una pelicula
  getCategoriaPelicula(idFilm: number): Observable<GetResponseCategoryFilm> {
    const peliculaUrl = `${this.baseUrl}/categories/search/categoryFilm?idFilm=${idFilm}`;
    return this.httpClient.get<GetResponseCategoryFilm>(peliculaUrl);
  }

  //Filtra pelicula por palabra clave
  getFilmsListByKeyWord(keyword: string): Observable<GetResponseFilms> {
    const peliculaUrl = `${this.baseUrl}/films/search/findByTitleContaining?title=${keyword}`;
    return this.httpClient.get<GetResponseFilms>(peliculaUrl);
  }

  //Guarda modificación de pelicula
  pathPelicula(idFilm: number, pelicula: Pelicula): Observable<Pelicula> {
    const searchUrl = `${this.baseUrl}/films/${idFilm}`;
    return this.httpClient.patch<Pelicula>(searchUrl, pelicula);
  }


  // Obtener las categorias
  getCategories(): Observable<GetResponseCategories> {
    const searchUrl = `${this.baseUrl}/categories`;
    return this.httpClient.get<GetResponseCategories>(searchUrl);
  }

  // Obtener todos los Actores
  getActors(): Observable<GetResponseActors> {
    const searchUrl = `${this.baseUrl}/actors`;
    return this.httpClient.get<GetResponseActors>(searchUrl);
  }
  // Obtener todos los directores
  getDirectors(): Observable<GetResponseDirectors> {
    const searchUrl = `${this.baseUrl}/directors`;
    return this.httpClient.get<GetResponseDirectors>(searchUrl);
  }
  //Obtener actores de una pelicula
  getActorsOfFilm(filmId: number) {
    const searchUrl = `${this.baseUrl}/films/${filmId}/actores`;
    return this.httpClient.get<GetResponseActors>(searchUrl);
  }
  //Obtener directores de una pelicula
  getDirectorsOfFilm(filmId: number) {
    const searchUrl = `${this.baseUrl}/films/${filmId}/directores`;
    return this.httpClient.get<GetResponseDirectors>(searchUrl);
  }
  // Obtener actor por Id
  getActor(idActor: number): Observable<Actor> {
    const actorUrl = `${this.baseUrl}/actors/${idActor}`;
    return this.httpClient.get<Actor>(actorUrl);
  }
  // obtener director por id
  getDirector(idDirector: number): Observable<Actor> {
    const directorUrl = `${this.baseUrl}/directors/${idDirector}`;
    return this.httpClient.get<Director>(directorUrl);
  }
  // Adicionar actor a una pelicula
  postActoresPelicula(actorPelicula: ActorPelicula): Observable<ActorPelicula> {
    // console.log('en servicio:' + JSON.stringify(actorPelicula));
     let dirUrlpostActorPelicula = `${this.baseUrl}/filmHasActors`;
     return this.httpClient.post<any>(dirUrlpostActorPelicula, actorPelicula);
  }
  // Adicionar director a una pelicula
  postDirectoresPelicula(directorPelicula: DirectorPelicula): Observable<DirectorPelicula> {
    // console.log('en servicio:' + JSON.stringify(directorPelicula));
     let dirUrlpostDirectorPelicula = `${this.baseUrl}/filmHasDirectors`;
     return this.httpClient.post<any>(dirUrlpostDirectorPelicula, directorPelicula);
  }
  // obtener id de filmHasActor con id de film y id de actor
  getfilmHasActorId(idFilm:number, idActor:number){
    console.log('id film:' + idFilm + ' y id actor: '+ idActor);
    let dirUrlgetFIlmHasActorId= `${this.baseUrl}/filmHasActors/search/filmHasActorId`;
    return this.httpClient.get<any>(dirUrlgetFIlmHasActorId+`?idFilm=${idFilm}&idActor=${idActor}`);
  }

  deletefilmHasActor(id: number) {
    console.log('delete en servicio:' +id);
    const deleteUrl = `${this.baseUrl}/filmHasActors/${id}`;
    return this.httpClient.delete(deleteUrl);
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
    categories: Categoria[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}
