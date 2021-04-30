import { HttpClient } from '@angular/common/http';
import { GuardarService } from './../../modelo/pelicula/guardar.service';
import { Categoria } from './../categoria';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ServicioPeliculaService } from 'src/app/modelo/pelicula/servicio-pelicula.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from '../pelicula'; 
    




@Component({
  selector: 'app-alta-pelicula',
  templateUrl: '../../../vista/pelicula/alta-pelicula.component.html',
  styleUrls: ['../../../vista/pelicula/alta-pelicula.component.css']
  
})
export class AltaPeliculaComponent implements OnInit {


  AltaPeliculaFormGroup: any;
  
  altaPeliculaForm: FormGroup;
  categorias: Categoria[];
  /*CategoriId: number;*/

  constructor(private formBuilder: FormBuilder,
     private peliculaService: ServicioPeliculaService,
     private route: ActivatedRoute,
     private guardarService: GuardarService,
     private router:Router){
      
    
    
   }

  ngOnInit(): void {
    this.altaPeliculaForm = this.formBuilder.group({
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

    
    
      
  }

  onSubmit(){
    console.log("Estamos guardando la informacion de la pelicula ");
    console.log(this.AltaPeliculaFormGroup.get('guardar').value);

  /*  this.route.paramMap.subscribe(()=>{
      this.listCategori();
    });
*/


  /*listCategori(){

    const hasCategoriaId:boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoriaId){
      this.CategoriId= +this.route.snapshot.paramMap.get('id');
    }else{
      this.CategoriId=1;
    }

    this.servicioPelicula.getfilmliscategori(this.CategoriId).subscribe(
      data=>{
        this.categoria=data
      }
    )
  }*/




}