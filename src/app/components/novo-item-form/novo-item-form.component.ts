import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InserirProdutoService } from 'src/app/services/inserir-produto/inserir-produto.service';
import { Itens } from 'src/app/shared/itens';


@Component({
  selector: 'app-novo-item-form',
  templateUrl: './novo-item-form.component.html',
  styleUrls: ['./novo-item-form.component.scss']
})
export class NovoItemFormComponent implements OnInit {
  formItens!: FormGroup;

  constructor(private service: InserirProdutoService) { }

  ngOnInit() {
    this.createForm(new Itens());
   let a = this.service.buscarItens();
   console.log(a);
  }
  


  createForm(itens: Itens) {
    this.formItens = new FormGroup({
      itemNome: new FormControl(itens.itemNome),
      ItemDescricao: new FormControl(itens.ItemDescricao),
      itemQuantidade: new FormControl(itens.itemQuantidade),
    })
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formItens.value);
    this.service.createItem(this.formItens.value).subscribe(response => {
      console.log('Item criado com sucesso:', response);
    })

    // Usar o método reset para limpar os controles na tela
    this.formItens.reset(new Itens());
  }


}
