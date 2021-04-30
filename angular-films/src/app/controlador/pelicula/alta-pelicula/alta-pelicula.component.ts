import { Categoria } from 'src/app/controlador/pelicula/categoria';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  categoria: any;
  

  constructor(public formBuilder: FormBuilder,
     public   servicioPelicula: ServicioPeliculaService,
     public route: ActivatedRoute) {
    
    
   }

  ngOnInit(): void {
    this.altaPeliculaFormGroup = this.formBuilder.group({
      pelicula: this.formBuilder.group({
        titulo: ['', Validators.required],
        descripcion: ['', Validators.required],
        fecha:  ['', Validators.required],
        actor: ['', Validators.required],
        categoria: ['', Validators.required],
        director: ['', Validators.required],
        imageurl: ['', Validators.required],
        videoUrl: ['', Validators.required],

        
      }),
    });

    this.servicioPelicula.getCategories().subscribe(resp=>{
      this.categoria = resp;  
    },
     error=>{ console.error(error)}
    );
    
    
      
  }
  onSubmit(){
    console.log("Estamos guardando la informacion de la pelicula ");
    console.log(this.AltaPeliculaFormGroup.get('pelicula').value);
  }

  guardar():void{

  }



}