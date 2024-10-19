import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AnexoComentario} from '../models/anexo-comentario';

@Injectable({
  providedIn: 'root'
})
export class AnexoComentarioService {
  url: string = "";

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<AnexoComentario[]> {
    return this.http.get<AnexoComentario[]>(this.url);
  }

  save(anexoComentario: AnexoComentario): Observable<AnexoComentario> {
    return this.http.post<AnexoComentario>(this.url, anexoComentario);
  }

}
