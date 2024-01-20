import { TestBed } from '@angular/core/testing';

import { LibTarjetaService } from './lib-tarjeta.service';

describe('LibTarjetaService', () => {
  let service: LibTarjetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibTarjetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
