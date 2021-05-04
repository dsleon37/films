import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ServicioPeliculaService } from 'src/app/modelo/pelicula/servicio-pelicula.service';
import { Categoria } from '../categoria';
import { Actor } from '../actor';
import { Director } from '../director';
import { Pelicula } from '../pelicula';
import { ActorPelicula } from '../actor-pelicula';
import { DirectorPelicula } from '../director-pelicula';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-datos-pelicula',
  templateUrl: '../../../vista/pelicula/alta-datos-pelicula.component.html',
  styleUrls: ['../../../vista/pelicula/alta-datos-pelicula.component.css']
})
export class AltaDatosPeliculaComponent implements OnInit {

  datosPeliculaFormGroup: FormGroup;

  peliculaId: number;

  pelicula: Pelicula = new Pelicula;

  categorias: Categoria[] = [];
  actores: Actor[] = [];
  directores: Director[] = [];

  actoresPelicula: Actor[] = [];
  directoresPelicula: Director[] = [];

  actor: Actor;
  director: Director;

  urlPelicula: string = 'http://localhost:8080/api/films/';
  urlActor: string = 'http://localhost:8080/api/actors/';
  urlDirector: string = 'http://localhost:8080/api/directors/';

  actorPelicula: ActorPelicula = new ActorPelicula;
  directorPelicula: DirectorPelicula = new DirectorPelicula;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private servicioPelicula: ServicioPeliculaService) {

    this.datosPeliculaFormGroup = this.formBuilder.group({
      film_has_actor: this.formBuilder.group({
        film_id: new FormControl(''),
        actor_id: new FormControl('')
      }),
      film_has_director: this.formBuilder.group({
        film_id: new FormControl(''),
        director_id: new FormControl('')
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
    this.urlPelicula = this.urlPelicula + this.peliculaId;


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

  addActors() {

    this.actor = this.datosPeliculaFormGroup.get('actor').value;

    Swal.fire({
      title: 'Quieres adicionar a ' + this.actor.name + '?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Guardar`,
      denyButtonText: `No Guardar`,
    }).then((result) => {
      if (result.isConfirmed) {

        this.actoresPelicula.push(this.actor);
        this.actor.id = 0;


        this.actores.forEach(element => {
          if (element.name == this.actor.name) {
            this.actor.id = element.id;
          }
        });
        this.actorPelicula.film = this.urlPelicula;
        this.actorPelicula.actor = this.urlActor + this.actor.id;

        this.servicioPelicula.postActoresPelicula(this.actorPelicula).subscribe({
          next: response => {
            console.log('add actor');
            Swal.fire('Actor Guardado con Éxito!', '', 'success')
          },
          error: err => {
            console.log('Error al adicionar actor a pelicula: ' + err.message);
          }
        });

      } else if (result.isDenied) {
        Swal.fire('No fue guardado', '', 'info')
      }
    })

  }

  addDirectors() {
    this.director = this.datosPeliculaFormGroup.get('director').value;

    Swal.fire({
      title: 'Quieres adicionar a ' + this.director.name + '?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Guardar`,
      denyButtonText: `No guardar`,
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log('add director:' + JSON.stringify(this.director));
        this.directoresPelicula.push(this.director);
        // console.log('todos los directores:' + this.directoresPelicula);
        this.directores.forEach(element => {
          if (element.name == this.director.name) {
            this.director.id = element.id;
          }
        });
        this.directorPelicula.film = this.urlPelicula;
        this.directorPelicula.director = this.urlDirector + this.director.id;
        this.servicioPelicula.postDirectoresPelicula(this.directorPelicula).subscribe({
          next: response => {
            console.log('add director');
            Swal.fire('Guardado con Éxito!', '', 'success')
          },
          error: err => {
            console.log('Error al adicionar director a pelicula: ' + err.message);
          }
        });

      } else if (result.isDenied) {
        Swal.fire('No fue guardado', '', 'info')
      }
    })
  }

  delActors(a: Actor) {
    //console.log('actor:' + a);
    let idfilmHasActor = 0;


    Swal.fire({
      title: 'Esta seguro?',
      text: "Luego no podrá revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.servicioPelicula.getfilmHasActorId(this.peliculaId,a.id).subscribe(
          data => {
            console.log('resp de servidor:' + JSON.stringify(data));
            idfilmHasActor = data.id;
            console.log('Id en la tabla para eliminar:' +idfilmHasActor);
            this.delActorId(idfilmHasActor);
          }
        );
        let i = this.actoresPelicula.indexOf(a);
        if (i !== -1) {
          this.actoresPelicula.splice(i, 1);
          console.log(this.actoresPelicula.length);
        }
        Swal.fire(
          'Eliminado!',
          'El actor ha sido eliminado.',
          'success'
        )
      }
    })

    
  }
  delActorId(idfilmHasActor:number){
    this.servicioPelicula.deletefilmHasActor(idfilmHasActor).subscribe({
      next: response => {
        console.log('eliminado actor');
      },
      error: err => {
        console.log('Error al eliminar actor en pelicula: ' + err.message);
      }
    });
  }
  delDirectors(d: Director) {
    let i = this.directoresPelicula.indexOf(d);
    if (i !== -1) {
      this.directoresPelicula.splice(i, 1);
    }
  }
  onSubmit() {
    console.log('Handling the submit button');
    //this.addActors();
  }

  getActorsOfFilm(peliculaId: number) {
    this.servicioPelicula.getActorsOfFilm(peliculaId).subscribe(
      data => {
        this.actoresPelicula = data._embedded.actors;
        console.log('Actores de Pelicula:');
        console.log(JSON.stringify(data._embedded.actors));
      }
    );
  }
  getDirectorsOfFilm(peliculaId: number) {
    this.servicioPelicula.getDirectorsOfFilm(peliculaId).subscribe(
      data => {
        this.directoresPelicula = data._embedded.directors;
        //console.log('Directores de Pelicula:');
        //console.log(JSON.stringify(data._embedded.directors));
      }
    );
  }


}
