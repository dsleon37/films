import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AltaOfertasService } from 'src/app/modelo/ofertas/alta-ofertas.service';
import { Oferta } from '../common/oferta';
import { FormsValidators } from 'src/app/validators/forms-validators';
import { LoginService } from 'src/app/modelo/login/login.service';

@Component({
  selector: 'app-alta-oferta',
  templateUrl: '../../../vista/ofertas/alta-oferta/alta-oferta.component.html',
  styleUrls: ['../../../vista/ofertas/alta-oferta/alta-oferta.component.css']
})


export class AltaOfertaComponent implements OnInit {

  altaOfertaFormGroup: FormGroup;
  offers: Oferta[] = [];
  ofert: Oferta;
  currentOfferId: number;
  deleteId: number;
  mensaje : string;
  mensajeErr : string;
 

  constructor(public loginService: LoginService ,private formBuilder: FormBuilder, private altaOfertasService: AltaOfertasService, private router: Router, private route: ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  
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
      const idUsuario =+ this.loginService.id;
      this.ofert.userId = "http://localhost:8080/api/cinemas/"+idUsuario;
      console.log('oferta', this.ofert, 'id_usuario', idUsuario);
      this.altaOfertasService.registerOffer(this.ofert).subscribe({
        next: response =>{
          this.mensaje = "Se ha registrado correctamente la oferta.";
        },
        error: err => {
          this.mensajeErr = `Error al registrar oferta: `+err.message;
        }
      });
    }
}
  listOffers() {
    this.altaOfertasService.getaltaOffersList().subscribe(
      data => {
        this.offers = data;
      }
    )
  }
  
  deleteOffers(id: number){
    /*this.route.paramMap.subscribe(() => {
      this.currentOfferId = +this.route.snapshot.paramMap.get('id')

    })*/
    console.log("Esto esta dentro del delete");
    console.log(id);
    this.altaOfertasService.deleteOffer(id, this.ofert);
  }
}
