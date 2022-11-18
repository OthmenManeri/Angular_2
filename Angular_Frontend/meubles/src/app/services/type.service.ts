import { Injectable } from '@angular/core';
import { type } from '../model/type.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class typeService {
  apiUrltype: string = 'http://localhost:8081/meubles/api/type';

  type!: type;
  constructor(private http: HttpClient) {
    console.log("Creation du service type");
  }

  listetype(): Observable<type[]> {
    return this.http.get<type[]>(this.apiUrltype);
  }


  ajoutertype(type: type): Observable<type> {
    return this.http.post<type>(this.apiUrltype, type, httpOptions);
  }

  consultertype(id: number): Observable<type> {
    const url = `${this.apiUrltype}/${id}`;
    return this.http.get<type>(url);
  }

  supprimertype(id: number) {
    const url = `${this.apiUrltype}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  updatetype(type: type): Observable<type> {
    return this.http.put<type>(this.apiUrltype, type, httpOptions);
  }
}

