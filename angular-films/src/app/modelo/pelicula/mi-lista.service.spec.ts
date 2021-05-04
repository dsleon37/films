import { TestBed } from '@angular/core/testing';

import { MiListaService } from './mi-lista.service';

describe('MiListaService', () => {
  let service: MiListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
