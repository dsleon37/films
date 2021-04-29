import { Categoria } from 'src/app/controlador/pelicula/categoria';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServicioPeliculaService } from 'src/app/modelo/pelicula/servicio-pelicula.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-alta-pelicula',
  templateUrl: '../../../vista/pelicula/alta-pelicula.component.html',
  styleUrls: ['../../../vista/pelicula/alta-pelicula.component.css']
  
})
export class AltaPeliculaComponent implements OnInit {

  altaPeliculaFormGroup: FormGroup ;
  AltaPeliculaFormGroup: any;
  

  constructor(private formBuilder: FormBuilder, private servicioPelicula: ServicioPeliculaService,private route: ActivatedRoute) {
    this.altaPeliculaFormGroup = this.formBuilder.group({
      pelicula: this.formBuilder.group({
        titulo: [''],
        descripcion: [''],
        fecha:  [''],
        actor: [''],
        categoria: [''],
        director: [''],
        imageurl: [''],
        Categoria: [],        

        
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