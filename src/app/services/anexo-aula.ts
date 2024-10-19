import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AnexoAula} from '../models/anexo-aula';

@Injectable({
  providedIn: 'root'
})
export class AnexoAulaService {
  url: string = "http://localhost:8000/api/caderno/anexo+aula/";

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<AnexoAula[]> {
    return this.http.get<AnexoAula[]>(this.url);
  }

  save(anexoAula: AnexoAula): Observable<AnexoAula> {
    return this.http.post<AnexoAula>(this.url, anexoAula);
  }

}
