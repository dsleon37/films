import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { OfertasService } from 'src/app/modelo/ofertas/ofertas.service';
import { Oferta } from '../common/oferta';
import { Suscriptor } from '../common/suscriptor';

@Component({
  selector: 'app-aplicar-oferta',
  templateUrl: '../../../vista/ofertas/aplicar-oferta/aplicar-oferta.component.html',
  styleUrls: ['../../../vista/ofertas/aplicar-oferta/aplicar-oferta.component.css']
})

export class AplicarOfertaComponent implements OnInit {

  aplicarOfertaFormGroup: FormGroup;
  offers: Oferta = new Oferta;
  totalPoints: number = 0;
  OfferId: number = 0;
  currentOfferId: number;
  oferta: Oferta;
  subscriber: Suscriptor = new Suscriptor;
  suscriptor: Suscriptor;
  mensaje: string;
  mensajeErr: string;

  constructor(private ofertasService: OfertasService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { 

    this.aplicarOfertaFormGroup= this.formBuilder.group({
      newSuscriptor: this.formBuilder.group({
        id: new FormControl(''),
        points: new FormControl('')
      })
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getOffers();
    })
  }

  getOffers() {
    
    const currentOfferId: number = +this.route.snapshot.paramMap.get('id');

    this.ofertasService.getOffers(currentOfferId).subscribe(
      data => {
        this.offers = data;
      }
    )
  }

  onSubmit(){

    if(this.aplicarOfertaFormGroup.invalid){
      this.aplicarOfertaFormGroup.markAllAsTouched();
    }else{
      this.suscriptor = this.aplicarOfertaFormGroup.get('newSuscriptor').value
      this.suscriptor.user = "http://localhost:8080/api/user/3";
      console.log('suscriptor', this.suscriptor);
      this.ofertasService.aplicarOffer(this.suscriptor).subscribe({
        next: response =>{
          this.mensaje = "Se ha registrado correctamente la oferta.";
        },
        error: err => {
          this.mensajeErr = `Error al registrar oferta: `+err.message;
        }
      });
    }
  }
}