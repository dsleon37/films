import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioPeliculaService } from 'src/app/modelo/pelicula/servicio-pelicula.service';
import { Pelicula } from '../pelicula';

@Component({
  selector: 'app-catalogo-peliculas',
  templateUrl: '../../../vista/pelicula/catalogo-peliculas.component.html',
  styleUrls: ['../../../vista/pelicula/catalogo-peliculas.component.css']
})
export class CatalogoPeliculasComponent implements OnInit {

  peliculas: Pelicula[] = [];

  constructor(private servicioPeliculas: ServicioPeliculaService) { }

  ngOnInit(): void {
    this.listaPeliculas();
  }

  listaPeliculas() {
        this.servicioPeliculas.getFilmsListPaginate(1, 100).subscribe(data => { this.peliculas = data._embedded.films });
  }

  verPelicula(pelicula: Pelicula) {

  }

}
