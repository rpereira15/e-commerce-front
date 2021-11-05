import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouteService } from 'src/app/commons/services/route.service';
import { CategoriaService } from '../../service/categoria.service';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.css']
})
export class CategoriaListaComponent implements OnInit{

  constructor(private categoriaService: CategoriaService,
    private routeService: RouteService) { }
  
  categorias: any[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.categoriaService.getAll()
    .then(result => {
      this.categorias = result.conteudo;
    })
  }

  visualizar(categoria: any) {
    console.log(categoria);
    this.routeService.navigate(`/categoria/visualizar/${categoria.id}`)
  }

}
