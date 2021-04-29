import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-alta-pelicula',
  templateUrl: '../../../vista/pelicula/alta-pelicula.component.html',
  styleUrls: ['../../../vista/pelicula/alta-pelicula.component.css']
  
})
export class AltaPeliculaComponent implements OnInit {

  altaPeliculaFormGroup: FormGroup ;
  AltaPeliculaFormGroup: any;

  constructor(private formBuilder: FormBuilder) {
    this.altaPeliculaFormGroup = this.formBuilder.group({
      pelicula: this.formBuilder.group({
        titulo: [''],
        descripcion: [''],
        fecha:  [''],
        actor: [''],
        categoria: [''],
        director: [''],
        imageurl: [''],

        
      }),
    });
   }

  ngOnInit(): void {

  }
  onSubmit(){
    console.log("Estamos guardando la informacion de la pelicula ");
    console.log(this.AltaPeliculaFormGroup.get('pelicula').value);
  }


}