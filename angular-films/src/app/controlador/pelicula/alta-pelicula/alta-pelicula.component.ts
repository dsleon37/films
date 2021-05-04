import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: '../../../vista/pelicula/alta-pelicula.component.html',
  styleUrls: ['../../../vista/pelicula/alta-pelicula.component.css']
})
export class AltaPeliculaComponent implements OnInit {

  altaPeliculaForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {

    this.altaPeliculaForm = this.formBuilder.group({
      pelicula: this.formBuilder.group({
        titulo: new FormControl('',[Validators.required,Validators.minLength(3)]),
        descripcion:  new FormControl('',[Validators.required,Validators.minLength(2)]),
        fecha:  new FormControl('',[Validators.required]),
        actor: new FormControl('', [Validators.required, Validators.minLength(2)]),
        categoria: new FormControl('', [Validators.required, Validators.minLength(2)]),
        director: new FormControl('', [Validators.required])
      }),
    });
  }

}
