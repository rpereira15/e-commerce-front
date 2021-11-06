import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaListaComponent } from './pages/categoria-lista/categoria-lista.component';
import { CategoriaRoutingModule, GenericRouterComponent } from './categoria-routing.module';
import { CategoriaVisualizarComponent } from './pages/categoria-visualizar/categoria-visualizar.component';
import { CategoriaCadastrarComponent } from './pages/categoria-cadastrar/categoria-cadastrar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GenericRouterComponent,
    CategoriaListaComponent,
    CategoriaVisualizarComponent,
    CategoriaCadastrarComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    FormsModule,
  ]
})
export class CategoriaModule { }
