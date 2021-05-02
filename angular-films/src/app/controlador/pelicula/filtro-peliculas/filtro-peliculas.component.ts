import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: '../../../vista/pelicula/filtro-peliculas.component.html',
  styleUrls: ['../../../vista/pelicula/filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  doSearch(value: string) {
    console.log(`value=${value}`);
    this.router.navigateByUrl(`/filtro-pelicula/${value}`);
  }

}
