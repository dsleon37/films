import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule, Router} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AltaPeliculaComponent } from './controlador/pelicula/alta-pelicula/alta-pelicula.component';
import { AltaDatosPeliculaComponent } from './controlador/pelicula/alta-datos-pelicula/alta-datos-pelicula.component';

const routes: Routes = [
  //{path: '', redirectTo: '/peliculas', pathMatch: 'full'},
  //{path: '**', redirectTo: '/peliculas', pathMatch: 'full'}

  { path : 'datos-pelicula', component: AltaDatosPeliculaComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AltaPeliculaComponent,
    AltaDatosPeliculaComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
