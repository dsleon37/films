import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AltaOfertasService } from 'src/app/modelo/ofertas/alta-ofertas.service';
import { Oferta } from '../common/oferta';

@Component({
  selector: 'app-alta-oferta',
  templateUrl: '../../../vista/ofertas/alta-oferta/alta-oferta.component.html',
  styleUrls: ['../../../vista/ofertas/alta-oferta/alta-oferta.component.css']
})


export class AltaOfertaComponent implements OnInit {

  altaOfertaFormGroup: FormGroup;
  offers: Oferta[] = [];

  constructor(private formBuilder: FormBuilder, private altaOfertasService: AltaOfertasService, private router: Router) {

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
    this.listOffers();
    /*this.altaOfertaFormGroup= this.formBuilder.group({
      oferta: this.formBuilder.group({
        description:  new FormControl('',[Validators.required,Validators.minLength(2)]),
        deadline:  new FormControl('',[Validators.required]),
        addPoints: new FormControl('', [Validators.required]),
        subPoints: new FormControl('', [Validators.required]),
      })
    })*/
    /*this.api.getAllOffers(1).subscribe(data =>{
      this.ofertas = data;
    })*/
  }
  listOffers() {
    this.altaOfertasService.getaltaOffersList().subscribe(
      data => {
        this.offers = data;
      }
    )
  }
  //get description(){return this.altaOfertaFormGroup.get('oferta.description')}
  onSubmit(){
    if(this.altaOfertaFormGroup.invalid){
      this.altaOfertaFormGroup.markAllAsTouched();
    }
    console.log("handle algo button")
  }
}
