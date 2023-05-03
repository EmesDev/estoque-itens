import { Component, OnInit } from '@angular/core';
import { InserirProdutoService } from 'src/app/services/inserir-produto/inserir-produto.service';

@Component({
  selector: 'app-cards-estoque',
  templateUrl: './cards-estoque.component.html',
  styleUrls: ['./cards-estoque.component.scss'],
})
export class CardsEstoqueComponent implements OnInit {
  quantidade: any;
  emEstoque: any;
  semEstoque: any;

  constructor(private service: InserirProdutoService) {}

  ngOnInit() {
    this.buscarDados();
  }

  buscarDados() {
    this.buscarQuantidadeItens();
    this.buscarQuantidadeEmEstoque();
    // this.buscarQuantidadeSemEstoque()
  }

  buscarQuantidadeItens() {
    this.service.quantidadeItens().subscribe((quantidade) => {
      this.quantidade = quantidade[0].quantidade;
    });
  }

  buscarQuantidadeEmEstoque() {
    this.service.quantidadeStatus().subscribe((emEstoque) => {
      this.emEstoque = emEstoque[0].emEstoque;
      this.semEstoque = emEstoque[0].semEstoque;
    });
  }
}
