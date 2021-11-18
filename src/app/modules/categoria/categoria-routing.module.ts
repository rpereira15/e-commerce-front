import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CategoriaAtualizarComponent } from './pages/categoria-atualizar/categoria-atualizar.component';
import { CategoriaCadastrarComponent } from './pages/categoria-cadastrar/categoria-cadastrar.component';
import { CategoriaListaComponent } from "./pages/categoria-lista/categoria-lista.component";
import { CategoriaVisualizarComponent } from './pages/categoria-visualizar/categoria-visualizar.component';

@Component({
    template: '<router-outlet></router-outlet>',
})
export class GenericRouterComponent { };


const routes: Routes = [
    {
        path: 'categoria',
        children: [
            { path: '', redirectTo: '/categoria/lista', pathMatch: 'full' },
            { path: 'lista', component: CategoriaListaComponent },
            { path: 'cadastrar', component: CategoriaCadastrarComponent },
            { path: 'visualizar/:idCategoria', component: CategoriaVisualizarComponent },
            { path: 'atualizar/:idCategoria', component: CategoriaAtualizarComponent}
            
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class CategoriaRoutingModule { }