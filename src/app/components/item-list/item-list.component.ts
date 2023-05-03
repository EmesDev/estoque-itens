import { Component, OnInit } from '@angular/core';
import { InserirProdutoService } from 'src/app/services/inserir-produto/inserir-produto.service';
import { Itens } from 'src/app/shared/itens';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  items: any;

  constructor(private service: InserirProdutoService) {}

  ngOnInit() {
    this.buscarItens();
  }

  buscarItens() {
    this.service.buscarItens().subscribe((items) => {
      this.items = items;
    });
  }

  deleteItem(item: any) {
    const index = this.items.indexOf(item);

    const data = {
      idItem: item.idItem,
    };
    this.service.deletarItem(data).subscribe((response) => {
      location.reload();
    });
    this.items.splice(index, 1);
  }

  editarItem(itens: any) {
    const editableElements = document.querySelectorAll('[contentEditable]');
    let contents: any[] = [];

    editableElements.forEach((element) => {
      const content = element.textContent;

      contents = contents.concat(content);
    });

    let item: Itens = {
      idItem: itens.idItem,
      itemNome: contents[0],
      itemDescricao: contents[1],
      itemQuantidade: +contents[2],
    };
    //coment
    this.service.atualizarItem(item).subscribe((response) => {
      console.log('Item criado com sucesso:', response);
      location.reload();
    });
    console.log(item);
  }
}
