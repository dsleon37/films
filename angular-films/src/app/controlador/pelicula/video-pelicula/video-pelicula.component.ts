import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioPeliculaService } from 'src/app/modelo/pelicula/servicio-pelicula.service';
import { Pelicula } from '../pelicula';

@Component({
  selector: 'app-video-pelicula',
  templateUrl: '../../../vista/pelicula/video-pelicula.component.html',
  styleUrls: ['../../../vista/pelicula/video-pelicula.component.css']
})
export class VideoPeliculaComponent implements OnInit {

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
        console.log(this.pelicula.videoUrl);
      }
    )
  }

}
