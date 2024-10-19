import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UsuarioAula} from '../models/usuarioAula';

@Injectable({
  providedIn: 'root'
})
export class UsuarioAulaService {
  url: string = "";

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<UsuarioAula[]> {
    return this.http.get<UsuarioAula[]>(this.url);
  }

  save(usuarioAula: UsuarioAula): Observable<UsuarioAula> {
    return this.http.post<UsuarioAula>(this.url, usuarioAula);
  }

}
