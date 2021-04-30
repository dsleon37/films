import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioPeliculaService } from 'src/app/modelo/pelicula/servicio-pelicula.service';
import { Categoria } from '../pelicula/categoria';

@Component({
  selector: 'app-menu-principal',
  templateUrl: '../../vista/menu-principal/menu-principal.component.html',
  styleUrls: ['../../vista/menu-principal/menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  categorias: Categoria[] = [];
  
 
  constructor(private servicioPeliculas:ServicioPeliculaService,
              private route: ActivatedRoute,
              private router: Router){
              this.router.routeReuseStrategy.shouldReuseRoute = () => false;
              }

  ngOnInit() {
    this.listarCategorias();
  }
  listarCategorias(){
    this.servicioPeliculas.getCategories().subscribe(data =>{this.categorias = data._embedded.categories});
  
    
  }
  listaCategoria(id:number){
    this.router.navigateByUrl(`/catalogo-por-categoria/${id}`);
  }

}
