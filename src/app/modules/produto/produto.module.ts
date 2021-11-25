import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoListaComponent } from './pages/produto-lista/produto-lista.component';
import { GenericRouterComponent, ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoCadastrarComponent } from './pages/produto-cadastrar/produto-cadastrar.component';



@NgModule({
  declarations: [
    GenericRouterComponent,
    ProdutoListaComponent,
    ProdutoCadastrarComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
