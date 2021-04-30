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
  
  peliculaId : number = 3;

  categorias: Categoria[] = [];
  actores: Actor[] = [];
  directores: Director[] = [];

  actoresPelicula : Actor[] = [];
  directoresPelicula: Director[] = [];

  constructor(private formBuilder: FormBuilder, 
              private router: Router, 
              private servicioPelicula: ServicioPeliculaService) {

    this.datosPeliculaFormGroup = this.formBuilder.group({
      film_has_actor: this.formBuilder.group({
        film_id: new FormControl(''),
        actor_id: new FormControl('')
      })

    });
  }

  ngOnInit(): void {
    this.getCategories();
    this.getActors();
    this.getDirectors();

    this.getActorsOfFilm(this.peliculaId);
    this.getDirectorsOfFilm(this.peliculaId);
  }

  getCategories() {
    this.servicioPelicula.getCategories().subscribe(
      data => {
        this.categorias = data._embedded.categories; 
        //console.log(this.categorias)
        //console.log('Categorias: ' + JSON.stringify(data));
       
      }
    )
  }
  getActors() {
    this.servicioPelicula.getActors().subscribe(
      data => {
        this.actores = data._embedded.actors;
        //console.log('Actores: ' + JSON.stringify(data));
        
      }
    )
  }

  getDirectors() {
    this.servicioPelicula.getDirectors().subscribe(
      data => {
        this.directores = data._embedded.directors;
        //console.log('Directores: ' + JSON.stringify(data));
        
      }
    )
  }


  
  get actor_id() { return this.datosPeliculaFormGroup.get('film_has_actor.actor_id'); }
  addActors(){
    console.log('Actor adicionado:');
    console.log( this.datosPeliculaFormGroup.get('film_has_actor').value.actor_id);
    

  }
  addDirectors( director : Director){
    console.log('Director adicionado:' + director);
  }
  onSubmit() {
    console.log('Handling the submit button');
    this.addActors();
  }

  getActorsOfFilm( peliculaId: number){
    this.servicioPelicula.getActorsOfFilm(peliculaId).subscribe(
      data => {
        this.actoresPelicula = data._embedded.actors;
        console.log('Actores de Pelicula:');
        console.log( JSON.stringify(data._embedded.actors));
      }
    );
  }
  getDirectorsOfFilm(peliculaId:number){
    this.servicioPelicula.getDirectorsOfFilm(peliculaId).subscribe(
      data => {
        this.directoresPelicula = data._embedded.directors;
        console.log('Directores de Pelicula:');
        console.log( JSON.stringify(data._embedded.directors));
      }
    );
  }

}
