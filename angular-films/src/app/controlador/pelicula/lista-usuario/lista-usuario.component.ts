import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MiListaService } from 'src/app/modelo/pelicula/mi-lista.service';
import { ServicioPeliculaService } from 'src/app/modelo/pelicula/servicio-pelicula.service';
import { Pelicula } from '../pelicula';
import { PeliculasLista } from '../peliculas_lista';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: '../../../vista/pelicula/lista-usuario.component.html',
  styleUrls: ['../../../vista/pelicula/lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  peliculasMiLista: Pelicula[];
  peliculasFavoritas: Pelicula[];
  peliculasVistas: Pelicula[];

  constructor(private servicioLista: MiListaService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.traerPeliculas();
    })
    
  }
  traerPeliculas(){
    //Cambiar usuario por el de sesion
    const idUsuario = 1;
    this.servicioLista.getFilmsMyList(idUsuario).subscribe(
      data => { this.peliculasMiLista = data._embedded.films;
      });
    this.servicioLista.getFilmsFavorites(idUsuario).subscribe(
      data => { this.peliculasFavoritas = data._embedded.films;
      });
    this.servicioLista.getFilmsViews(idUsuario).subscribe(
      data => { this.peliculasVistas = data._embedded.films;
      });
  }

}
