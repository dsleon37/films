import { Component,NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ServicioPeliculaService } from 'src/app/modelo/pelicula/servicio-pelicula.service';
import { Categoria } from '../categoria';
import { Pelicula } from '../pelicula';

@Component({
  selector: 'app-modificar-pelicula',
  templateUrl: '../../../vista/pelicula/modificar-pelicula.component.html',
  styleUrls: ['../../../vista/pelicula/modificar-pelicula.component.css']
})
export class ModificarPeliculaComponent implements OnInit {

  pelicula: Pelicula = new Pelicula;
  categorias:Categoria[] = [];
  categoriaPelicula: Categoria = new Categoria;
  mensajeError: string = '';
  mensaje: string = '';
  

  constructor(private peliculaService: ServicioPeliculaService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(() => {
      this.getPelicula();
    });
    this.peliculaService.getCategories().subscribe(data =>{this.categorias = data._embedded.categories});
  }

  getPelicula() {
    const peliculaId: number = +this.route.snapshot.paramMap.get('id');
    this.peliculaService.getPelicula(peliculaId).subscribe(
      data => {
        this.pelicula = data;
        if (this.pelicula.id >= 1) {
          this.peliculaService.getCategoriaPelicula(this.pelicula.id).subscribe(
            data =>{
              this.categoriaPelicula = data._embedded.categories[0];
            }
          );
        }
      });
      
     
      
  }

  guardarPelicula(){
    this.pelicula.category = 'http://localhost:8080/api/categories/'+this.categoriaPelicula.id;
    console.log(this.pelicula);
    this.peliculaService.pathPelicula(this.pelicula.id,this.pelicula).subscribe({
      next: response => {
        this.mensaje = `Película modificada.`;
        
      },
      error: err => {
        this.mensajeError = 'Error al modificar película: '+err.message;
      }
     });
  }

}
