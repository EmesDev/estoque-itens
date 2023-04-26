import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  items = [
    {
      name: 'Item 1',
      description: 'Descrição do item 1',
      quantity: 10
    },
    {
      name: 'Item 2',
      description: 'Descrição do item 2',
      quantity: 5
    },
    {
      name: 'Item 3',
      description: 'Descrição do item 3',
      quantity: 2
    }
  ];

}
