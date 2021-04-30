import { TestBed } from '@angular/core/testing';

import { AplicarOfertasService } from './aplicar-ofertas.service';

describe('AplicarOfertasService', () => {
  let service: AplicarOfertasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AplicarOfertasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
