import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  peliculaFormGroup:FormGroup;
  

  constructor(private peliculaService: ServicioPeliculaService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(() => {
      this.getPelicula();
    });

    this.peliculaFormGroup = this.formBuilder.group({
      pelicula: this.formBuilder.group({
        id: new FormControl(''),
        titulo: new FormControl('',[Validators.required,Validators.minLength(3)]),
        descripcion:  new FormControl('',[Validators.required,Validators.minLength(2)]),
        fecha:  new FormControl('',[Validators.required]),
        imagen:  new FormControl('',[Validators.required]),
        video:  new FormControl('',[Validators.required]),
        categoria_id:  new FormControl('',[Validators.required])
      }),
    });

    this.peliculaService.getCategories().subscribe(data =>{this.categorias = data._embedded.categories}); 
  }

  getPelicula() {
    // get the "id" param string. convert string to a number using the "+" symbol
    const peliculaId: number = +this.route.snapshot.paramMap.get('id');
    this.peliculaService.getPelicula(peliculaId).subscribe(
      data => {
        this.pelicula = data;
        this.peliculaFormGroup.controls['pelicula'].setValue({
          'id': data.id,
          'titulo':data.title,
          'descripcion':data.description,
          'fecha':data.date,
          'imagen':data.imageUrl,
          'video':data.videoUrl,
          'categoria_id':data.categoria_id,
        });
        console.log(this.peliculaFormGroup);
      });
  }

  guardarPelicula(){
    console.log();
  }

}
