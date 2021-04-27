import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule, Router} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AltaPeliculaComponent } from './controlador/pelicula/alta-pelicula/alta-pelicula.component';
import { FilmService } from './service/film.service';

const routes: Routes = [
  {path: '', redirectTo: '/peliculas', pathMatch: 'full'},
  {path: '**', redirectTo: '/peliculas', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    AltaPeliculaComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
