import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioPeliculaService } from 'src/app/modelo/pelicula/servicio-pelicula.service';
import { Pelicula } from '../pelicula';

@Component({
  selector: 'app-ver-pelicula',
  templateUrl: '../../../vista/pelicula/ver-pelicula.component.html',
  styleUrls: ['../../../vista/pelicula/ver-pelicula.component.css']
})
export class VerPeliculaComponent implements OnInit {

  pelicula: Pelicula = new Pelicula;

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
        console.log(this.pelicula);
      }
    )
  }

}
