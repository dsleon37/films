import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioPeliculaService } from 'src/app/modelo/pelicula/servicio-pelicula.service';
import { Categoria } from '../categoria';
import { Pelicula } from '../pelicula';

@Component({
  selector: 'app-ver-pelicula',
  templateUrl: '../../../vista/pelicula/ver-pelicula.component.html',
  styleUrls: ['../../../vista/pelicula/ver-pelicula.component.css']
})
export class VerPeliculaComponent implements OnInit {

  pelicula: Pelicula = new Pelicula;
  categoriaPelicula: Categoria = new Categoria;

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

}
