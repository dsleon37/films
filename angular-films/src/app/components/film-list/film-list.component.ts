import { FilmService } from './../../service/film.service';
import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/common/film';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

    film: Film[];

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.listFilm();
  }

  listFilm(){
    this.filmService.getFilmList().subscribe(
      data => {
        this.film=data;
      }
    )
  }

}
