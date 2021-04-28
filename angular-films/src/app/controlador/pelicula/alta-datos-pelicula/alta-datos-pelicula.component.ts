import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-datos-pelicula',
  templateUrl: '../../../vista/pelicula/alta-datos-pelicula.component.html',
  styleUrls: ['../../../vista/pelicula/alta-datos-pelicula.component.css']
})
export class AltaDatosPeliculaComponent implements OnInit {

  datosPeliculaFormGroup: FormGroup;
  
  actors:string[]=['actor1','actor2','actor3','actor4','actor5'];

  directors:string[]=['director1','director2','director3','director4','director5'];

  categories:string[]=['category1','category2','category3','category4','category5'];
  

  constructor(private formBuilder: FormBuilder, router: Router) {
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

    // this.datosPeliculaFormGroup = this.formBuilder.group( {} )
  }
  onSubmit() {
    console.log('Handling the submit button');
  }

}
