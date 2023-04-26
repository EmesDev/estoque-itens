import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InserirProdutoService {
  private apiUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }



createItem(data: any): Observable<any> {
  const url = `${this.apiUrl}/novoItem`;
  console.log(data)
  return this.http.post<any>(url, data, this.httpOptions );
}

buscarItens(): Observable<any> {
  const url = `${this.apiUrl}/selItens`;
  console.log()
  return this.http.get<any>('https://api.pexels.com/v1/search?query=people', this.httpOptions);
}

// getImagens(): Observable<any> {
//   const headers = new HttpHeaders({
//     'Authorization': `${this.key}`
//   })

//   const requestOptions = { headers: headers }

//   return this.httpClient.get<any>('https://api.pexels.com/v1/curated?per_page=40', requestOptions)
//     .pipe()

// }
}
