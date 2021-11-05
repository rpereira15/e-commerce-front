import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaListaComponent } from './pages/categoria-lista/categoria-lista.component';
import { CategoriaRoutingModule, GenericRouterComponent } from './categoria-routing.module';
import { CategoriaVisualizarComponent } from './pages/categoria-visualizar/categoria-visualizar.component';



@NgModule({
  declarations: [
    GenericRouterComponent,
    CategoriaListaComponent,
    CategoriaVisualizarComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule
  ]
})
export class CategoriaModule { }
