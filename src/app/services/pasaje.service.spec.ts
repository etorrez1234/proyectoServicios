import { TestBed, inject } from '@angular/core/testing';

import { PasajeService } from './pasaje.service';

describe('PasajeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasajeService]
    });
  });

  it('should be created', inject([PasajeService], (service: PasajeService) => {
    expect(service).toBeTruthy();
  }));
});
