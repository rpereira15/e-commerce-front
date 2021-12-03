import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoListaComponent } from './pages/produto-lista/produto-lista.component';
import { GenericRouterComponent, ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoCadastrarComponent } from './pages/produto-cadastrar/produto-cadastrar.component';
import { FormsModule } from '@angular/forms';
import { ProdutoAtualizarComponent } from './pages/produto-atualizar/produto-atualizar.component';



@NgModule({
  declarations: [
    GenericRouterComponent,
    ProdutoListaComponent,
    ProdutoCadastrarComponent,
    ProdutoAtualizarComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    FormsModule
  ]
})
export class ProdutoModule { }
