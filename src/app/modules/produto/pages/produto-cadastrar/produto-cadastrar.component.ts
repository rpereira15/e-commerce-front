import { Component, OnInit } from '@angular/core';
import { ICategoria } from 'src/app/modules/categoria/model/categoria.model';
import { CategoriaService } from 'src/app/modules/categoria/service/categoria.service';
import { IProduto } from '../../model/produto.model';
import { ProdutoService } from '../../service/produto.service';

@Component({
  selector: 'app-produto-cadastrar',
  templateUrl: './produto-cadastrar.component.html',
  styleUrls: ['./produto-cadastrar.component.css']
})
export class ProdutoCadastrarComponent implements OnInit {


  categorias: ICategoria[] = [];
  produto =  {} as IProduto;

  constructor(private categoriaService: CategoriaService,
    private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.categoriaService.getFullCategoria()
    .then(result => {
      this.categorias = result;
    })
  }

  salvarProduto() {
    this.produtoService.salvarProduto(this.produto)
    .then(result => {
      console.log(result);
    })
  }

}
