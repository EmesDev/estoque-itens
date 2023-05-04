import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Itens } from 'src/app/shared/itens';
import { env } from 'environment';

@Injectable({
  providedIn: 'root',
})
export class InserirProdutoService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  createItem(data: any): Observable<any> {
    const url = `${env.apiUrl}/novoItem`;
    return this.http.post<any>(url, data, this.httpOptions);
  }

  buscarItens(): Observable<any> {
    const url = `${env.apiUrl}/selItens`;
    return this.http.get<any>(url, this.httpOptions).pipe();
  }

  quantidadeItens(): Observable<any> {
    const url = `${env.apiUrl}/selQtEstoque`;
    return this.http.get<any>(url, this.httpOptions).pipe();
  }

  quantidadeStatus(): Observable<any> {
    const url = `${env.apiUrl}/selQtStatus`;
    return this.http.get<any>(url, this.httpOptions).pipe();
  }

  deletarItem(data: any): Observable<any> {
    const url = `${env.apiUrl}/delItem`;
    return this.http.post<any>(url, data, this.httpOptions).pipe();
  }

  atualizarItem(data: any): Observable<any> {
    const url = `${env.apiUrl}/uptItem`;
    return this.http.post<any>(url, data, this.httpOptions).pipe();
  }
}
