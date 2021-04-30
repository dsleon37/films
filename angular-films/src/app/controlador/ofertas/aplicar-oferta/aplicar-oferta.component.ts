import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/modelo/ofertas/ofertas.service';
import { Oferta } from '../common/oferta';

@Component({
  selector: 'app-aplicar-oferta',
  templateUrl: '../../../vista/ofertas/aplicar-oferta/aplicar-oferta.component.html',
  styleUrls: ['../../../vista/ofertas/aplicar-oferta/aplicar-oferta.component.css']
})

export class AplicarOfertaComponent implements OnInit {

  offers: Oferta[] = [];
  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.listOffers();
  }

  listOffers() {
    this.ofertasService.getOffersList().subscribe(
      data => {
        this.offers = data;
      }
    )
  }

}