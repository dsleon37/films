import { Film } from './film';
import { User } from './../../../modelo/user';
import { Pelicula } from 'src/app/controlador/pelicula/pelicula';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './../categoria';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ServicioPeliculaService } from 'src/app/modelo/pelicula/servicio-pelicula.service';
import { ActivatedRoute, Router } from '@angular/router';






@Component({
  selector: 'app-alta-pelicula',
  templateUrl: '../../../vista/pelicula/alta-pelicula.component.html',
  styleUrls: ['../../../vista/pelicula/alta-pelicula.component.css']

})
export class AltaPeliculaComponent implements OnInit {


  categorias: Categoria[] = [];
  films: Film [] = [];
  film : Film = new Film;
  

  AltaPeliculaFormGroup: any;

  altaPeliculaForm: FormGroup;
  filmForm:FormGroup;
  
  /*CategoriId: number;*/

  constructor(private formBuilder: FormBuilder,
    private peliculaService: ServicioPeliculaService,
    private route: ActivatedRoute,
    private router: Router) {



  }

  ngOnInit(): void {
    this.getCategories();
   this.altaPeliculaForm = this.formBuilder.group({
      film: this.formBuilder.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        fecha: ['', Validators.required],
       // actor: ['', Validators.required],
        
       // director: ['', Validators.required],
        imageurl: ['', Validators.required],
        videoUrl: ['', Validators.required],
        category_id: ['', Validators.required],

      }),
    });



    
   this.filmForm = this.formBuilder.group({
      category: this.formBuilder.group({

        categoria: ['', Validators.required],

      }),
    });


  }

  onSubmit() {


 //   this.film=this.altaPeliculaForm.get('film').value;
    //this.pelicula.categoria="http://localhost:8080/api/categories/" + categoria.id;

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
  getCategories() {
    this.peliculaService.getCategories().subscribe(
      data => {
        this.categorias = data._embedded.categories; 
        
        //console.log(this.categorias)
        console.log('Categorias: ' + JSON.stringify(data));
       
      }
    )
  }


  Updatebtn(){
    console.log(this.altaPeliculaForm.get("film.categoria"));
    this.altaPeliculaForm.patchValue({film:{category_id:"http://localhost:8080/api/films/"} });
    this.film=this.altaPeliculaForm.get('film').value;
    this.peliculaService.postFilm(this.film);//.subscribe(data=>{this.film=data;console.log(data)})
    
    
  }



}