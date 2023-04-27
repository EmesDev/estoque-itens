import { Component, OnInit } from '@angular/core';
import { InserirProdutoService } from 'src/app/services/inserir-produto/inserir-produto.service';

@Component({
  selector: 'app-cards-estoque',
  templateUrl: './cards-estoque.component.html',
  styleUrls: ['./cards-estoque.component.scss']
})
export class CardsEstoqueComponent implements OnInit {
  quantidade: any ;
  emEstoque: any;
  semEstoque: any;


  constructor(private service: InserirProdutoService) {
  }


  ngOnInit() {

    this.buscarDados()


  }

  buscarDados(){
    this.buscarQuantidadeItens()
    this.buscarQuantidadeEmEstoque()
    // this.buscarQuantidadeSemEstoque()
  }

  buscarQuantidadeItens(){
    this.service.quantidadeItens().subscribe(quantidade =>{
      console.log(quantidade[0].quantidade)
      console.log('dwa')
      this.quantidade = quantidade[0].quantidade
    })
  }

  buscarQuantidadeEmEstoque(){
    this.service.quantidadeStatus().subscribe(emEstoque =>{
      console.log(emEstoque[0].itemStatus)
      console.log('dwa')
      this.emEstoque = emEstoque[0].emEstoque
      this.semEstoque = emEstoque[0].semEstoque
    })
  }

  // buscarQuantidadeSemEstoque(){
  //   this.service.quantidadeStatus("Sem Estoque").subscribe(semEstoque =>{
  //     console.log(semEstoque[0].itemStatus)
  //     console.log('dwa')
  //     this.semEstoque = semEstoque[0].itemStatus
  //   })
  // }

    

  

}
