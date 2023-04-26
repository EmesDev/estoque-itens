import { TestBed } from '@angular/core/testing';

import { InserirProdutoService } from './inserir-produto.service';

describe('InserirProdutoService', () => {
  let service: InserirProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InserirProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
