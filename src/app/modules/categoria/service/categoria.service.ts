import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private httpClient: HttpClient) { }


  getAll(): Promise<any> {
    return this.httpClient
    .get('http://localhost:8080/categoria/')
    .toPromise();
  }
}
