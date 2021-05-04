import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/modelo/ofertas/ofertas.service';
import { Oferta } from '../common/oferta';

@Component({
  selector: 'app-ver-ofertas',
  templateUrl: '../../../vista/ofertas/ver-ofertas/ver-ofertas.component.html',
  styleUrls: ['../../../vista/ofertas/ver-ofertas/ver-ofertas.component.css']
})
export class VerOfertasComponent implements OnInit {

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