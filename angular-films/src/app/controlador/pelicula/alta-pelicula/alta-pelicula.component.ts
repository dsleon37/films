import { User } from './../../../modelo/user';
import { Observable } from 'rxjs';

import { Pelicula } from 'src/app/controlador/pelicula/pelicula';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './../categoria';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ServicioPeliculaService } from 'src/app/modelo/pelicula/servicio-pelicula.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormsValidators } from 'src/app/validators/forms-validators';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: '../../../vista/pelicula/alta-pelicula.component.html',
  styleUrls: ['../../../vista/pelicula/alta-pelicula.component.css']

})
export class AltaPeliculaComponent implements OnInit {

  peliculas: Pelicula[] = [];
  pelicula: Pelicula = new Pelicula;
  idCategoria: String='';

  constructor(private ServicioPelicula:ServicioPeliculaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

  }

  postBtn(){
    this.pelicula.category='http://localhost:8080/api/categories/'+this.idCategoria
    //funcion guardar
    this.ServicioPelicula.postPelicula(this.pelicula).subscribe(data => {console.log(data)})

  }

}
