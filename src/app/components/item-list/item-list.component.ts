import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InserirProdutoService } from 'src/app/services/inserir-produto/inserir-produto.service';
import { Itens } from 'src/app/shared/itens';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  items: any;
  formEditarItens!: FormGroup;

  constructor(private service: InserirProdutoService) {}

  ngOnInit() {
    this.buscarItens();
    this.createForm(new Itens());
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
    // const editableElements = document.querySelectorAll('[contentEditable]');
    // let contents: any[] = [];

    // editableElements.forEach((element) => {
    //   const content = element.textContent;

    //   contents = contents.concat(content);
    // });

    let item: Itens = {
      idItem: itens.idItem,
      itemNome: itens.itemNome,
      itemDescricao: itens.itemDescricao,
      itemQuantidade: +itens.itemQuantidade,
    };
    //coment
    // this.service.atualizarItem(item).subscribe((response) => {
    //   console.log('Item criado com sucesso:', response);
    //   location.reload();
    // });
    console.log(item);
  }

  createForm(itens: Itens) {
    this.formEditarItens = new FormGroup({
      itemNome: new FormControl(itens.itemNome, [Validators.required]),
      itemDescricao: new FormControl(itens.itemDescricao, [Validators.required]),
      itemQuantidade: new FormControl(itens.itemQuantidade, [Validators.required]),
    });

    console.log(this.formEditarItens.value);
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    if (!this.formEditarItens.invalid) {
      this.service.createItem(this.formEditarItens.value).subscribe((response) => {
        console.log('Item criado com sucesso:', response);
        location.reload();
      });

      // Usar o método reset para limpar os controles na tela
      this.formEditarItens.reset(new Itens());
    }
  }
}
