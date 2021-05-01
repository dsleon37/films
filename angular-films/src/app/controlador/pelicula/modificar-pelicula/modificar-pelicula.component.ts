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
  categorias:Categoria[];
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
      });
  }

  guardarPelicula(){
    
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
