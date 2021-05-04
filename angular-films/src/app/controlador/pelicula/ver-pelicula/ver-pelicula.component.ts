import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioPeliculaService } from 'src/app/modelo/pelicula/servicio-pelicula.service';
import { Categoria } from '../categoria';
import { Pelicula } from '../pelicula';
import { Actor } from '../actor';
import { Director } from '../director';

@Component({
  selector: 'app-ver-pelicula',
  templateUrl: '../../../vista/pelicula/ver-pelicula.component.html',
  styleUrls: ['../../../vista/pelicula/ver-pelicula.component.css']
})
export class VerPeliculaComponent implements OnInit {

  pelicula: Pelicula = new Pelicula;
  categoriaPelicula: Categoria = new Categoria;

  actoresPelicula: Actor[] = [];
  directoresPelicula: Director[] = [];

  constructor(private peliculaService: ServicioPeliculaService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.detallePelicula();
    })
  }

  detallePelicula() {

    // get the "id" param string. convert string to a number using the "+" symbol
    const peliculaId: number = +this.route.snapshot.paramMap.get('id');

    this.peliculaService.getPelicula(peliculaId).subscribe(
      data => {
        this.pelicula = data;
        if (this.pelicula.id >= 1) {
          this.peliculaService.getCategoriaPelicula(this.pelicula.id).subscribe(
            data =>{
              this.categoriaPelicula = data._embedded.categories[0];
              console.log(this.categoriaPelicula);
            }
          );
        }
      });
  }


  getActorsOfFilm(peliculaId: number) {
    this.peliculaService.getActorsOfFilm(peliculaId).subscribe(
      data => {
        this.actoresPelicula = data._embedded.actors;
        console.log('Actores de Pelicula:');
        console.log(JSON.stringify(data._embedded.actors));
      }
    );
  }
  getDirectorsOfFilm(peliculaId: number) {
    this.peliculaService.getDirectorsOfFilm(peliculaId).subscribe(
      data => {
        this.directoresPelicula = data._embedded.directors;
        //console.log('Directores de Pelicula:');
        //console.log(JSON.stringify(data._embedded.directors));
      }
    );
  }


}
