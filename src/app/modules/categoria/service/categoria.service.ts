import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IPageConfig } from 'src/app/commons/models/pagination.model';
import { ICadastroAtualizacaoCategoria, ICategoria } from '../model/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private httpClient: HttpClient) { }

  salvarCategoria(categoria: ICadastroAtualizacaoCategoria): Promise<ICategoria> {
    return this.httpClient
    .post<ICategoria>('http://localhost:8080/categoria/', categoria)
    .toPromise();
  }

  atualizarCategoria(categoria: ICategoria): Promise<ICategoria> {
    return this.httpClient
    .put<ICategoria>(`http://localhost:8080/categoria/${categoria.id}`, {descricao: categoria.descricao})
    .toPromise();
  }
  

  getAll(): Promise<IPageConfig<ICategoria>> {
    return this.httpClient
    .get<IPageConfig<ICategoria>>('http://localhost:8080/categoria/')
    .toPromise();
  }

  getOne(id: number): Promise<ICategoria> {
    return this.httpClient
    .get<ICategoria>(`http://localhost:8080/categoria/${id}`)
    .toPromise();
  }
}
