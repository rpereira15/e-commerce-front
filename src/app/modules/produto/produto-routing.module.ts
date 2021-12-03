import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ProdutoAtualizarComponent } from './pages/produto-atualizar/produto-atualizar.component';
import { ProdutoCadastrarComponent } from './pages/produto-cadastrar/produto-cadastrar.component';
import { ProdutoListaComponent } from "./pages/produto-lista/produto-lista.component";

@Component({
    template: '<router-outlet></router-outlet>',
})
export class GenericRouterComponent { };


const routes: Routes = [
    {
        path: 'produto',
        children: [
            { path: '', redirectTo: '/produto/lista', pathMatch: 'full' },
            { path: 'lista', component: ProdutoListaComponent },
            { path: 'cadastrar', component: ProdutoCadastrarComponent },
            { path: 'atualizar/:idProduto', component: ProdutoAtualizarComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class ProdutoRoutingModule { }