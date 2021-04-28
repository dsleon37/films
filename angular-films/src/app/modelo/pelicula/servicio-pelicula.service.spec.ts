import { TestBed } from '@angular/core/testing';

import { ServicioPeliculaService } from './servicio-pelicula.service';

describe('ServicioPeliculaService', () => {
  let service: ServicioPeliculaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPeliculaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
