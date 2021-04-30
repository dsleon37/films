import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CarroOfertas } from 'src/app/controlador/ofertas/common/carro-ofertas';

@Injectable({
  providedIn: 'root'
})
export class AplicarOfertasService {

  cartOffers: CarroOfertas[] = [];

  totalPoints: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(theOffer: CarroOfertas) {
    // check if we already have the item in our cart
    let alreadyExsistsInCart: boolean = false;
    let existingCartOffer: CarroOfertas = undefined;


    // find the item in the cart based on item id

    // check if we found it
  }
}