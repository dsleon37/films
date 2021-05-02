import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ServicioPeliculaService } from 'src/app/modelo/pelicula/servicio-pelicula.service';
import { Categoria } from '../categoria';
import { Actor } from '../actor';
import { Director} from '../director';
import { Pelicula } from '../pelicula';

@Component({
  selector: 'app-alta-datos-pelicula',
  templateUrl: '../../../vista/pelicula/alta-datos-pelicula.component.html',
  styleUrls: ['../../../vista/pelicula/alta-datos-pelicula.component.css']
})
export class AltaDatosPeliculaComponent implements OnInit {

  datosPeliculaFormGroup: FormGroup;
  
  peliculaId : number;

  pelicula: Pelicula = new Pelicula;

  categorias: Categoria[] = [];
  actores: Actor[] = [];
  directores: Director[] = [];

  actoresPelicula : Actor[] = [];
  directoresPelicula: Director[] = [];

  actor: Actor;
  director: Director;

  constructor(private formBuilder: FormBuilder, 
              private router: Router, 
              private route: ActivatedRoute,
              private servicioPelicula: ServicioPeliculaService) {

    this.datosPeliculaFormGroup = this.formBuilder.group({
      film_has_actor: this.formBuilder.group({
        film_id: new FormControl(''),
        actor_id: new FormControl('')
      }),
      actor: this.formBuilder.group({
        id: new FormControl(''),
        name: new FormControl('')
      }),      
      director: this.formBuilder.group({
        id: new FormControl(''),
        name: new FormControl('')
      })

    });
  }

  ngOnInit(): void {


    this.peliculaId = +this.route.snapshot.paramMap.get('id');
    this.infoPelicula();
    this.getCategories();
    this.getActors();
    this.getDirectors();

    this.getActorsOfFilm(this.peliculaId);
    this.getDirectorsOfFilm(this.peliculaId);
  }


  infoPelicula() {
    this.servicioPelicula.getPelicula(this.peliculaId).subscribe(
      data => {
        this.pelicula = data;
      }
    )
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
  
  get actorId() { return this.datosPeliculaFormGroup.get('actor.id'); }
  get actorName() { return this.datosPeliculaFormGroup.get('actor.name'); }
  addActors(){
    
    this.actor = this.datosPeliculaFormGroup.get('actor').value;
    this.actoresPelicula.push(this.actor);
    
    console.log('todos los actores:'+ this.actoresPelicula);
  }

  delActors(a: Actor){
    let i = this.actoresPelicula.indexOf( a );
    if ( i !== -1 ) {
      this.actoresPelicula.splice( i, 1 );
    console.log(this.actoresPelicula.length); 
  }
  }
  
  addDirectors(){
    this.director = this.datosPeliculaFormGroup.get('director').value;
    console.log('add director:'+ JSON.stringify(this.director) );
    this.directoresPelicula.push(this.director);
    console.log('todos los directores:'+ this.directoresPelicula);
  }
  delDirectors(d: Director){
    let i = this.directoresPelicula.indexOf( d );
    if ( i !== -1 ) {
      this.directoresPelicula.splice( i, 1 );
  }
  }
  onSubmit() {
    console.log('Handling the submit button');
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
