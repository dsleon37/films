import { TestBed } from '@angular/core/testing';

import { AltaOfertasService } from './alta-ofertas.service';

describe('AltaOfertasService', () => {
  let service: AltaOfertasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AltaOfertasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
