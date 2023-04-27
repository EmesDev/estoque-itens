import { Component, OnInit } from '@angular/core';
import { InserirProdutoService } from 'src/app/services/inserir-produto/inserir-produto.service';
import { Itens } from 'src/app/shared/itens';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  items: any ;

  constructor(private service: InserirProdutoService) { }

  ngOnInit() {
    this.buscarItens();

  
  }


  buscarItens(){
    this.service.buscarItens().subscribe(items =>{
      console.log(items)
      console.log('dwa')
      this.items = items
    })

    

  }
 
}
