import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioPeliculaService } from 'src/app/modelo/pelicula/servicio-pelicula.service';
import { Categoria } from '../categoria';
import { Actor } from '../actor';
import { Director} from '../director';

@Component({
  selector: 'app-alta-datos-pelicula',
  templateUrl: '../../../vista/pelicula/alta-datos-pelicula.component.html',
  styleUrls: ['../../../vista/pelicula/alta-datos-pelicula.component.css']
})
export class AltaDatosPeliculaComponent implements OnInit {

  datosPeliculaFormGroup: FormGroup;
  
  //actors:string[]=['actor1','actor2','actor3','actor4','actor5'];
  //directors:string[]=['director1','director2','director3','director4','director5'];
  // categories:string[]=['category1','category2','category3','category4','category5'];

  categories: Categoria[] = [];
  actors: Actor[] = [];
  directors: Director[] = [];

  constructor(private formBuilder: FormBuilder, 
              private router: Router, 
              private servicioPelicula: ServicioPeliculaService) {

    this.datosPeliculaFormGroup = this.formBuilder.group({
      film: this.formBuilder.group({
        title: new FormControl(''),
        description: new FormControl(''),
        date: new FormControl(''),
        actor_id: new FormControl(''),
        category_id: new FormControl(''),
        director_id: new FormControl(''),
        filmlist_id: new FormControl(''),
      })

    });
  }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories() {
    this.servicioPelicula.getCategories().subscribe(
      data => {
        console.log('Categorias: ' + JSON.stringify(data));
        //this.categories = data;
      }
    )
  }
  getActors() {
    this.servicioPelicula.getActors().subscribe(
      data => {
        console.log('Actores: ' + JSON.stringify(data));
        
      }
    )
  }

  getDirectors() {
    this.servicioPelicula.getDirectors().subscribe(
      data => {
        console.log('Directores: ' + JSON.stringify(data));
        
      }
    )
  }
  onSubmit() {
    console.log('Handling the submit button');
  }

}
