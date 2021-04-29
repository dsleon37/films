import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule, Router} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AltaPeliculaComponent } from './controlador/pelicula/alta-pelicula/alta-pelicula.component';
import { AltaDatosPeliculaComponent } from './controlador/pelicula/alta-datos-pelicula/alta-datos-pelicula.component';



import { CatalogoPeliculasComponent } from './controlador/pelicula/catalogo-peliculas/catalogo-peliculas.component';
import { VerPeliculaComponent } from './controlador/pelicula/ver-pelicula/ver-pelicula.component';
import { MenuPrincipalComponent } from './controlador/menu-principal/menu-principal.component';

const routes: Routes = [
  {path: 'catalogo-peliculas/:id', component: CatalogoPeliculasComponent},
  {path: 'ver-pelicula/:id', component: VerPeliculaComponent},
  {path: 'alta-pelicula', component: AltaPeliculaComponent},
  {path: 'datos-pelicula', component: AltaDatosPeliculaComponent},
  {path: '', redirectTo: '/catalogo-peliculas/inicio', pathMatch: 'full'},
  {path: '**', redirectTo: '/catalogo-peliculas/inicio', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    AltaPeliculaComponent,
    AltaDatosPeliculaComponent,
    CatalogoPeliculasComponent,
    VerPeliculaComponent,
    MenuPrincipalComponent
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
