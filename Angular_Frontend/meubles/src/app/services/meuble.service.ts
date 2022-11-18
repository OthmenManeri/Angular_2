import { Injectable } from '@angular/core';
import { meuble } from '../model/meuble.model';
import { type } from '../model/type.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
import { typeWrapper } from '../model/typeWrapped.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class meubleService {
  apiUrltype: string = 'http://localhost:8081/meubles/type';

  meuble!: meuble;
  constructor(private http: HttpClient) {
    console.log("Creation du service meuble");
  }

  listemeuble(): Observable<meuble[]> {
    return this.http.get<meuble[]>(apiURL);
  }


  listetypes(): Observable<typeWrapper> {
    return this.http.get<typeWrapper>(this.apiUrltype);
  }

  ajoutermeuble(prod: meuble): Observable<meuble> {
    return this.http.post<meuble>(apiURL, prod, httpOptions);
  }

  supprimermeuble(id: number) {
    const url = `${apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consultermeuble(id: number): Observable<meuble> {
    const url = `${apiURL}/${id}`;
    return this.http.get<meuble>(url);
  }

  updatemeuble(anim: meuble): Observable<meuble> {
    return this.http.put<meuble>(apiURL, anim, httpOptions);
  }

  rechercherPartype(idtype: number):Observable< meuble[]> {
    const url = `${apiURL}/meublestype/${idtype}`;
    return this.http.get<meuble[]>(url);
    }
    rechercherParNom(nom: string):Observable< meuble[]> {
      const url = `${apiURL}/meublesByName/${nom}`;
      return this.http.get<meuble[]>(url);
      }

}
