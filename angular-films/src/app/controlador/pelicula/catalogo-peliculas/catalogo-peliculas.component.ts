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
  categoriaId: number;

  constructor(private servicioPeliculas: ServicioPeliculaService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listaPeliculas();
  }

  listaPeliculas() {
    /*this.peliculas = [{
     id: 1,
     title: 'Monster Hunter',
     description: 'En un mundo extraño, la teniente Artemis y su equipo de soldados de elite deben unir fuerzas con un misterioso cazador para luchar contra poderosos monstruos.',
     date: new Date(2020,11,12),
     imageUrl: './assets/peliculas_imagenes/monster_hunter.jpeg'
    },
    {
     id: 2,
     title: 'Mulán',
     description: 'El emperador chino emite un decreto que exige reclutar a un varón de cada familia para luchar con el ejército imperial. Para salvar a su anciano padre de este deber, su única hija Fa Mulán se hace pasar por soldado y toma su lugar.',
     date: new Date(2020,11,12),
     imageUrl: './assets/peliculas_imagenes/mulan.jpeg'
    },
    {
     id: 3,
     title: 'Corre',
     description: 'Run es una película de suspenso y misterio estadounidense de 2020. Dirigida por Aneesh Chaganty y escrita por él mismo y Sev Ohanian, la película está protagonizada por Sarah Paulson y Kiera Allen y fue lanzada digitalmente el 20 de noviembre de 2020 por el servicio de streaming Hulu.​',
     date: new Date(2020,11,20),
     imageUrl: './assets/peliculas_imagenes/corre.jpeg'
    },
    {
     id: 4,
     title: 'El camino de Xico',
     description: 'Una corporación malvada, en busca de oro, pretende destruir la montaña que cobija y protege a los habitantes de un pueblo. Sin embargo, una niña llamada Copi y su perro, Xico, se adentran en la montaña para evitar que su mundo desaparezca.',
     date: new Date(2020,12,20),
     imageUrl: './assets/peliculas_imagenes/camino_xico.jpeg'
    },
   ];*/
    const hasCategoriaId: boolean = this.route.snapshot.paramMap.has("id");

    if (hasCategoriaId) {
      this.categoriaId = +this.route.snapshot.paramMap.get("id");
      console.log(this.route);
      console.log(this.categoriaId);
      if (this.categoriaId) {
        this.servicioPeliculas.getFilmsListPaginateByCategories(1, 100, this.categoriaId).subscribe(data => { this.peliculas = data._embedded.films });
      } else {
        this.servicioPeliculas.getFilmsListPaginate(1, 100).subscribe(data => { this.peliculas = data._embedded.films });
      }
    }


  }

  verPelicula(pelicula: Pelicula) {

  }

}
