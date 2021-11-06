import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IPageConfig } from 'src/app/commons/models/pagination.model';
import { ICategoria } from '../model/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private httpClient: HttpClient) { }


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
