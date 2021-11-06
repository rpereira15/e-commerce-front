import { Component, OnInit } from '@angular/core';
import { ICadastroAtualizacaoCategoria } from '../../model/categoria.model';

@Component({
  selector: 'app-categoria-cadastrar',
  templateUrl: './categoria-cadastrar.component.html',
  styleUrls: ['./categoria-cadastrar.component.css']
})
export class CategoriaCadastrarComponent implements OnInit {

  constructor() { }

  categoria = {} as ICadastroAtualizacaoCategoria;

  ngOnInit(): void {

  }

}
