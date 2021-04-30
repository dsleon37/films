import { TestBed } from '@angular/core/testing';

import { GuardarService } from './guardar.service';

describe('GuardarService', () => {
  let service: GuardarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
