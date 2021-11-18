import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from 'src/app/commons/services/route.service';
import { ICategoria } from '../../model/categoria.model';
import { CategoriaService } from '../../service/categoria.service';

@Component({
  selector: 'app-categoria-atualizar',
  templateUrl: './categoria-atualizar.component.html',
  styleUrls: ['./categoria-atualizar.component.css']
})
export class CategoriaAtualizarComponent implements OnInit {

  constructor(private categoriaService: CategoriaService,
    private activatedRoute: ActivatedRoute,
    private routeService: RouteService) { }

  categoria = {} as ICategoria;
  error = {} as any;

  ngOnInit(): void {
    this.getOne(this.activatedRoute.snapshot.params.idCategoria);
    this.error.message = '';
  }

  getOne(id: number) {
    this.categoriaService.getOne(id)
    .then(result => {
      this.categoria = result;
    })
  }

  salvar() {
    this.categoriaService.atualizarCategoria(this.categoria)
      .then(() => {
        this.routeService.navigate('/categoria/lista');
      })
      .catch(result => {
        this.error = result.error;
        
      });
  }

  disabled() {
    return !this.categoria.descricao || this.categoria.descricao.length > 30;
  }

  limpaErro() {
    this.error.message = '';
  }

}
