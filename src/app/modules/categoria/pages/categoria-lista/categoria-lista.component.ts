import { Component, OnDestroy, OnInit } from '@angular/core';
import { IPageConfig } from 'src/app/commons/models/pagination.model';
import { RouteService } from 'src/app/commons/services/route.service';
import { ICategoria } from '../../model/categoria.model';
import { CategoriaService } from '../../service/categoria.service';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.css']
})
export class CategoriaListaComponent implements OnInit{

  constructor(private categoriaService: CategoriaService,
    private routeService: RouteService) { }
  
  categorias = {} as IPageConfig<ICategoria>;

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.categoriaService.getAll()
    .then(result => {
      this.categorias = result;
    })
  }

  visualizar(categoria: any) {
    this.routeService.navigate(`/categoria/visualizar/${categoria.id}`);
  }

  atualizar(categoria: any) {
    this.routeService.navigate(`/categoria/atualizar/${categoria.id}`);
  }

  cadastrarNovaCategoria(){
    this.routeService.navigate(`/categoria/cadastrar`);
  }

}
