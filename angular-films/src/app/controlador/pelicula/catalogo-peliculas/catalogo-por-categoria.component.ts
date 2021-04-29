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

  constructor(private servicioPeliculas: ServicioPeliculaService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listarPeliculasPorCategoria();
  }

  listarPeliculasPorCategoria() {
    const hasCategoriaId: boolean = this.route.snapshot.paramMap.has("id");

    if (hasCategoriaId) {
      this.categoriaId = +this.route.snapshot.paramMap.get("id");
      console.log(hasCategoriaId);
      console.log(this.categoriaId);
      this.servicioPeliculas.getFilmsListPaginateByCategories(1, 100, this.categoriaId).subscribe(data => { this.peliculasCategoria = data._embedded.films; console.log(this.peliculasCategoria) });
    }
  }
}

