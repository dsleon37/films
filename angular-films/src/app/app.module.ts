import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule, Router} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AltaPeliculaComponent } from './controlador/pelicula/alta-pelicula/alta-pelicula.component';
import { AltaDatosPeliculaComponent } from './controlador/pelicula/alta-datos-pelicula/alta-datos-pelicula.component';
import { CatalogoPeliculasComponent } from './controlador/pelicula/catalogo-peliculas/catalogo-peliculas.component';
import { VerPeliculaComponent } from './controlador/pelicula/ver-pelicula/ver-pelicula.component';
import { MenuPrincipalComponent } from './controlador/menu-principal/menu-principal.component';
import { CatalogoPorCategoriaComponent } from './controlador/pelicula/catalogo-peliculas/catalogo-por-categoria.component';
import { VideoPeliculaComponent } from './controlador/pelicula/video-pelicula/video-pelicula.component';

const routes: Routes = [
  {path: 'video-pelicula/:id', component: VideoPeliculaComponent},
  {path: 'ver-pelicula/:id', component: VerPeliculaComponent},
  {path: 'alta-pelicula', component: AltaPeliculaComponent},
  {path: 'datos-pelicula', component: AltaDatosPeliculaComponent},
  {path: 'catalogo-por-categoria/:id', component: CatalogoPorCategoriaComponent},
  {path: 'catalogo-peliculas', component: CatalogoPeliculasComponent},
  {path: '', redirectTo: '/catalogo-peliculas', pathMatch: 'full'},
  {path: '**', redirectTo: '/catalogo-peliculas', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    AltaPeliculaComponent,
    AltaDatosPeliculaComponent,
    CatalogoPeliculasComponent,
    VerPeliculaComponent,
    MenuPrincipalComponent,
    CatalogoPorCategoriaComponent,
    VideoPeliculaComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
