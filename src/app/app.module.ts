import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';
import { EstoqueComponent } from './page/estoque/estoque.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NovoItemFormComponent } from './components/novo-item-form/novo-item-form.component';
import { InserirProdutoService } from './services/inserir-produto/inserir-produto.service';
import { CardsEstoqueComponent } from './components/cards-estoque/cards-estoque.component';
import { ItemListComponent } from './components/item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EstoqueComponent,
    NovoItemFormComponent,
    CardsEstoqueComponent,
    ItemListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [InserirProdutoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
