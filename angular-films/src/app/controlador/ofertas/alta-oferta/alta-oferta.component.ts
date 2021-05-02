import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AltaOfertasService } from 'src/app/modelo/ofertas/alta-ofertas.service';
import { Oferta } from '../common/oferta';
import { FormsValidators } from 'src/app/validators/forms-validators';

@Component({
  selector: 'app-alta-oferta',
  templateUrl: '../../../vista/ofertas/alta-oferta/alta-oferta.component.html',
  styleUrls: ['../../../vista/ofertas/alta-oferta/alta-oferta.component.css']
})


export class AltaOfertaComponent implements OnInit {

  altaOfertaFormGroup: FormGroup;
  offers: Oferta[] = [];
  ofert: Oferta;

  constructor(private formBuilder: FormBuilder, private altaOfertasService: AltaOfertasService, private router: Router) { }

  
  ngOnInit(): void {
    this.listOffers();
    this.altaOfertaFormGroup= this.formBuilder.group({
      newOferta: this.formBuilder.group({
        description:  new FormControl('',[Validators.required,Validators.minLength(2), FormsValidators.notOnlyWhitespace]),
        deadline:  new FormControl('',[Validators.required, FormsValidators.notOnlyWhitespace]),
        addPoints: new FormControl('', [Validators.required, FormsValidators.notOnlyWhitespace]),
        subPoints: new FormControl('', [Validators.required, FormsValidators.notOnlyWhitespace]),
      })
    })
  }
  onSubmit(){
    if(this.altaOfertaFormGroup.invalid){
      this.altaOfertaFormGroup.markAllAsTouched();
    }else{
      this.ofert = this.altaOfertaFormGroup.get('newOferta').value
      this.ofert.userId = "http://localhost:8080/api/cinemas/1"/*+UserID*/;
      console.log(this.ofert);
      this.altaOfertasService.registerOffer(this.ofert);
    }
}
  listOffers() {
    this.altaOfertasService.getaltaOffersList().subscribe(
      data => {
        this.offers = data;
      }
    )
  }
  
  deleteOffers(){
    console.log(this.altaOfertaFormGroup.get('newOferta').value.id);
    this.altaOfertasService.deleteOffer(this.altaOfertaFormGroup.get('newOferta').value.id, this.altaOfertaFormGroup.get('oferta').value.id);
  }

}
