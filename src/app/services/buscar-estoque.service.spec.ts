import { TestBed } from '@angular/core/testing';

import { BuscarEstoqueService } from './buscar-estoque.service';

describe('BuscarEstoqueService', () => {
  let service: BuscarEstoqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarEstoqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
