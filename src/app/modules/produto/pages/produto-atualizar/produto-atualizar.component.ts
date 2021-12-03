import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from 'src/app/commons/services/route.service';
import { ICategoria } from 'src/app/modules/categoria/model/categoria.model';
import { CategoriaService } from 'src/app/modules/categoria/service/categoria.service';
import { IProduto } from '../../model/produto.model';
import { ProdutoService } from '../../service/produto.service';

@Component({
  selector: 'app-produto-atualizar',
  templateUrl: './produto-atualizar.component.html',
  styleUrls: ['./produto-atualizar.component.css']
})
export class ProdutoAtualizarComponent implements OnInit {
  
  produto = {} as IProduto;
  categorias: ICategoria[] = [];

  constructor(private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private routeService: RouteService) { }

  ngOnInit(): void {
    this.getOne(this.activatedRoute.snapshot.params.idProduto);
    this.categoriaService.getFullCategoria()
    .then(result => {
      this.categorias = result;
    })
  }

  getOne(id: number) {
    this.produtoService.getOne(id)
    .then((result: any) => {
      this.produto = result;
      this.produto.categoria = result.categoria.id;
    })
  }

}
