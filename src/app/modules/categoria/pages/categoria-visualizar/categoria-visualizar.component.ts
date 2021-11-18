import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategoria } from '../../model/categoria.model';
import { CategoriaService } from '../../service/categoria.service';

@Component({
  selector: 'app-categoria-visualizar',
  templateUrl: './categoria-visualizar.component.html',
  styleUrls: ['./categoria-visualizar.component.css']
})
export class CategoriaVisualizarComponent implements OnInit {

  constructor(private categoriaService: CategoriaService,
    private activatedRoute: ActivatedRoute) { }

  categoria = {} as ICategoria;

  ngOnInit(): void {
    this.getOne(this.activatedRoute.snapshot.params.idCategoria);
  }

  getOne(id: number) {
    this.categoriaService.getOne(id)
    .then(result => {
      this.categoria = result;
    })
  }

}
