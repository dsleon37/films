import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/modelo/login/login.service';
import { MiListaService } from 'src/app/modelo/pelicula/mi-lista.service';
import { ServicioPeliculaService } from 'src/app/modelo/pelicula/servicio-pelicula.service';
import { User } from 'src/app/modelo/user';
import { Categoria } from '../categoria';
import { Pelicula } from '../pelicula';
import { PeliculasLista } from '../peliculas_lista';

@Component({
  selector: 'app-ver-pelicula',
  templateUrl: '../../../vista/pelicula/ver-pelicula.component.html',
  styleUrls: ['../../../vista/pelicula/ver-pelicula.component.css']
})
export class VerPeliculaComponent implements OnInit {

  peliculas: Pelicula[] = [];
  pelicula: Pelicula = new Pelicula;
  peliculaLista: PeliculasLista = new PeliculasLista;
  categoriaPelicula: Categoria = new Categoria;
  agregar: any;
  favorito: any;
  mensaje:string;
  mensajeError:string;
  usuario:User;

  constructor(private peliculaService: ServicioPeliculaService,
    private peliculasListaService: MiListaService,
    private route: ActivatedRoute,
    public loginService: LoginService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.detallePelicula();
    })
  }

  detallePelicula() {

    // get the "id" param string. convert string to a number using the "+" symbol
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

  deletebtn(){
    let mytitle = this.pelicula;
    this.peliculaService.deletePelicula(this.pelicula.id);
    alert(`La Pelicula ${mytitle.title} fue eliminado del sistema`);
  }
  limpiar(){
    this.mensaje = "";
    this.mensajeError = "";
    this.agregar = false;
    this.favorito = false;
  }

  agregarMiLista(check:any, idPelicula:number){
    this.usuario = this.loginService.user;
    const idUser =+ this.loginService.id;
    this.peliculasListaService.getFilmsByFilm(idUser,idPelicula).subscribe(data => { 
      this.peliculaLista = data._embedded.filmLists[0];
      if (this.agregar) {
        this.guardarLista(this.peliculaLista);
      } else {
        this.guardarFavorito(this.peliculaLista);
      }
      })
  //console.log(this.peliculaLista);
  }

  guardarLista(agregarPel: PeliculasLista){
    if (agregarPel) {
      agregarPel.views = false;
      this.peliculasListaService.pathGuardarPeliculaPath(agregarPel.id,agregarPel).subscribe({
        next: response => {
          this.mensaje = `Pelicula ${this.pelicula.title} agregada a tu lista.`;
          
        },
        error: err => {
          this.mensajeError = 'Error al agregar película: '+err.message;
        }
       });
    } else {
      const peliculaNueva = new PeliculasLista();
      const idUser =+ this.loginService.id;
      peliculaNueva.user = "http://localhost:8080/api/users/"+idUser;
      peliculaNueva.film = "http://localhost:8080/api/films/"+this.pelicula.id;
      peliculaNueva.views = false;
      peliculaNueva.favorite = false;
      console.log(peliculaNueva);
      this.peliculasListaService.postGuardarPelicula(peliculaNueva).subscribe({
        next: response => {
          this.mensaje = `Pelicula ${this.pelicula.title} agregada a tu lista.`;
          
        },
        error: err => {
          this.mensajeError = 'Error al agregar película: '+err.message;
        }
       });
    }
  }

  guardarFavorito(agregarPel: PeliculasLista){
    if (agregarPel) {
      agregarPel.favorite = true;
      this.peliculasListaService.pathGuardarPeliculaPath(agregarPel.id,agregarPel).subscribe({
        next: response => {
          this.mensaje = `Pelicula ${this.pelicula.title} agregada a tu lista de favoritos.`;
          
        },
        error: err => {
          this.mensajeError = 'Error al agregar película a favoritos: '+err.message;
        }
       });
    } else {
      const peliculaNueva = new PeliculasLista();
      const idUser =+ this.loginService.id;
      peliculaNueva.user = "http://localhost:8080/api/users/"+idUser;
      peliculaNueva.film = "http://localhost:8080/api/films/"+this.pelicula.id;
      peliculaNueva.views = true;
      peliculaNueva.favorite = true;
      console.log(peliculaNueva);
      this.peliculasListaService.postGuardarPelicula(peliculaNueva).subscribe({
        next: response => {
          this.mensaje = `Pelicula ${this.pelicula.title} agregada a tu lista de favoritos.`;
          
        },
        error: err => {
          this.mensajeError = 'Error al agregar película: '+err.message;
        }
       });
    }
  }

}
