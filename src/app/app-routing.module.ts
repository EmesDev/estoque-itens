import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ItensNovosComponent } from './page/itens-novos/itens-novos/itens-novos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'itens-novos', component: ItensNovosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
