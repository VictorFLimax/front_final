import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Aula} from '../models/aula';
import {Comentario} from '../models/comentario';

@Injectable({
  providedIn: 'root'
})
export class AulaService {
  private url: string = "http://localhost:8000/api/caderno/aula/";
  params: HttpParams = new HttpParams();

  constructor(private http: HttpClient) {
  }

  clearParams() {
    this.params = new HttpParams();
  }

  addParam(key: string, value: string) {
    this.params = this.params.set(key, value);
  }

  getAll(): Observable<Aula[]> {
    return this.http.get<Aula[]>(this.url,);
  }

  save(aula: Aula): Observable<Aula> {
    return this.http.post<Aula>(this.url, aula);
  }

  getById(id: number): Observable<Aula> {
    return this.http.get<Aula>(`${this.url}${id}/`, {params: this.params});
  }
  saveComentario(comentario: Comentario): Observable<Comentario> {
    return this.http.post<Comentario>(this.url, comentario);
  }


}
