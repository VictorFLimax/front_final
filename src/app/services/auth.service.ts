import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {Usuario} from '../models/usuario';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environment/environment';
import {URLS} from '../urls';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public usuario: Usuario;
  private readonly url: string;
  private readonly cadastroUrl: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.url}${URLS.LOGIN}`;
    this.cadastroUrl = `${environment.url}${URLS.CADASTRO}`;
  }

  login(username: string, password: string): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, {username: username, password: password});
  }
  register(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.cadastroUrl, usuario);
  }

}
