import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoListaComponent } from './pages/produto-lista/produto-lista.component';
import { GenericRouterComponent, ProdutoRoutingModule } from './produto-routing.module';



@NgModule({
  declarations: [
    GenericRouterComponent,
    ProdutoListaComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
