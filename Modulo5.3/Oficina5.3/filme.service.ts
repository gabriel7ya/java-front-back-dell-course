import { Filme } from './filme.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class FilmeService {

  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  consultarFilmes(filme: Filme): Observable<Filme> {
    return this.httpClient.get<Filme>(`http://localhost:8080/CatalogoDeFilmes/consultar-filme?id=${filme.id}`);
  }

  cadastrarFilmes(filme: Filme): Observable<Filme> {
    return this.httpClient.post<Filme>('http://localhost:8080/CatalogoDeFilmes/persistir-filme', filme);
  }

}
