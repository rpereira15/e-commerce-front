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

  salvar($event: ICategoria) {
    this.categoriaService.atualizarCategoria($event)
      .then(() => {
        this.routeService.navigate('/categoria/lista');
      })
      .catch(result => {
        this.error = result.error;
        
      });
  }


  limpaErro() {
    this.error.message = '';
  }

}
