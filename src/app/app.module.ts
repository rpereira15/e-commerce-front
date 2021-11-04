import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './meu-componente/primeiro-componente/primeiro-componente.component';
import { HeaderComponent } from './core/header/header.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { RouterModule } from '@angular/router';
import { CategoriaListaComponent } from './modules/categoria/pages/categoria-lista/categoria-lista.component';
import { ProdutoModule } from './modules/produto/produto.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CategoriaModule,
    ProdutoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
