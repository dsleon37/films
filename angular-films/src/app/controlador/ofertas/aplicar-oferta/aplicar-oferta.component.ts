import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/modelo/ofertas/ofertas.service';
import { CarroOfertas } from '../common/carro-ofertas';
import { Oferta } from '../common/oferta';

@Component({
  selector: 'app-aplicar-oferta',
  templateUrl: '../../../vista/ofertas/aplicar-oferta/aplicar-oferta.component.html',
  styleUrls: ['../../../vista/ofertas/aplicar-oferta/aplicar-oferta.component.css']
})

export class AplicarOfertaComponent implements OnInit {

  offers: Oferta[] = [];
  totalPoints: number = 0;
  totalOffers: number = 0;
  OfferId: number = 0;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.listOffers();
  }

  listOffers() {

    // get a handle to the offers
    this.offers = this.ofertasService.offers;

    // subscribe to the cart totalPoints

    this.ofertasService.totalPoints.subscribe(
      (data: number) => this.totalPoints = data
    );

    this.ofertasService.getOffersList().subscribe(
      data => {
        this.offers = data;
      }
    )

    // addToCart(CarroOfertas: Oferta) {
    //   console.log(`Adding offer: ${CarroOfertas.description}, ${CarroOfertas.addedPoints}, ${CarroOfertas.subbedPoints}`)
    // }
  }

}