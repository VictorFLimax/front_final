import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comentario} from '../models/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  url: string = "";

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(this.url);
  }

  save(comentario: Comentario): Observable<Comentario> {
    return this.http.post<Comentario>(this.url, comentario);
  }

}
