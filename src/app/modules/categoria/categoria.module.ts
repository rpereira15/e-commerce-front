import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaListaComponent } from './pages/categoria-lista/categoria-lista.component';
import { CategoriaRoutingModule, GenericRouterComponent } from './categoria-routing.module';



@NgModule({
  declarations: [
    GenericRouterComponent,
    CategoriaListaComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule
  ]
})
export class CategoriaModule { }
