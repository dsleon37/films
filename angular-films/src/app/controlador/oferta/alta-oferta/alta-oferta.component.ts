import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-oferta',
  templateUrl: '../../../vista/oferta/alta-oferta.component.html',
  styleUrls: ['../../../vista/oferta/alta-oferta.component.css']
})


export class AltaOfertaComponent implements OnInit {

  altaOfertaForm: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.altaOfertaForm = this.formBuilder.group({
      oferta: this.formBuilder.group({
        description:  new FormControl('',[Validators.required,Validators.minLength(2)]),
        deadline:  new FormControl('',[Validators.required]),
        addPoints: new FormControl('', [Validators.required, Validators.minLength(2)]),
        subPoints: new FormControl('', [Validators.required, Validators.minLength(2)]),
      })
    })
  }

  onSubmit(){
    console.log("handle algo button")
  }
}
