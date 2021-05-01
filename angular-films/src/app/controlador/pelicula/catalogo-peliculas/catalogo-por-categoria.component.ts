import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioPeliculaService } from 'src/app/modelo/pelicula/servicio-pelicula.service';
import { Pelicula } from '../pelicula';

@Component({
  selector: 'app-catalogo-por-categoria',
  templateUrl: '../../../vista/pelicula/catalogo-por-categoria.component.html',
  styleUrls: ['../../../vista/pelicula/catalogo-por-categoria.component.css']
})
export class CatalogoPorCategoriaComponent implements OnInit {

  categoriaId: number;
  peliculasCategoria: Pelicula[];
  modoFiltro: boolean;

  constructor(private servicioPeliculas: ServicioPeliculaService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listarPeliculasPorCategoria();
    this.filtrarPelicula();
  }

  listarPeliculasPorCategoria() {
    const hasCategoriaId: boolean = this.route.snapshot.paramMap.has("id");

    if (hasCategoriaId) {
      this.categoriaId = +this.route.snapshot.paramMap.get("id");
      this.servicioPeliculas.getFilmsListPaginateByCategories(1, 100, this.categoriaId).subscribe(data => { this.peliculasCategoria = data._embedded.films});
    }
  }

  filtrarPelicula(){
    this.modoFiltro = this.route.snapshot.paramMap.has("keyword");
    if (this.modoFiltro) {
      const palabra: string = this.route.snapshot.paramMap.get('keyword');
      this.servicioPeliculas.getFilmsListByKeyWord(palabra).subscribe(data => { this.peliculasCategoria = data._embedded.films});
    }
  }
}

