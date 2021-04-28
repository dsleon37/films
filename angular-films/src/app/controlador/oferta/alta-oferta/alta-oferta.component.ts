import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-oferta',
  templateUrl: '../../../vista/oferta/alta-oferta.component.html',
  styleUrls: ['../../../vista/oferta/alta-oferta.component.css']
})


export class AltaOfertaComponent implements OnInit {

  altaOfertaFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router) {
                this.altaOfertaFormGroup= this.formBuilder.group({
                  oferta: this.formBuilder.group({
                    description:  new FormControl('',[Validators.required,Validators.minLength(2)]),
                    deadline:  new FormControl('',[Validators.required]),
                    addPoints: new FormControl('', [Validators.required]),
                    subPoints: new FormControl('', [Validators.required]),
                  })
                })
              }

  ngOnInit(): void {
    this.altaOfertaFormGroup= this.formBuilder.group({
      oferta: this.formBuilder.group({
        description:  new FormControl('',[Validators.required,Validators.minLength(2)]),
        deadline:  new FormControl('',[Validators.required]),
        addPoints: new FormControl('', [Validators.required]),
        subPoints: new FormControl('', [Validators.required]),
      })
    })
  }
  get description(){return this.altaOfertaFormGroup.get('oferta.description')}
  onSubmit(){
    if(this.altaOfertaFormGroup.invalid){
      this.altaOfertaFormGroup.markAllAsTouched();
    }
    console.log("handle algo button")
  }
}
