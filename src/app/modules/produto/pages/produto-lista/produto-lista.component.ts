import { Component, OnInit } from '@angular/core';
import { IPageConfig } from 'src/app/commons/models/pagination.model';
import { RouteService } from 'src/app/commons/services/route.service';
import { IProduto } from '../../model/produto.model';
import { ProdutoService } from '../../service/produto.service';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {
  
  produtos = {} as IPageConfig<IProduto>;

  constructor(private produtoService: ProdutoService,
    private routeService: RouteService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.produtoService.getAll()
    .then(result => {
      this.produtos = result;
    });

  }

  atualizar(produto: IProduto) {
    this.routeService.navigate(`/produto/atualizar/${produto.id}`);
  }

}
