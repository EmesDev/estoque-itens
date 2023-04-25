import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './compoents/navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';
import { AddItensComponent } from './compoents/add-itens/add-itens.component';
import { EstoqueComponent } from './page/estoque/estoque.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddItensComponent,
    EstoqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
