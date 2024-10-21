import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import {environment} from '../../environment/environment';
import {URLS} from '../urls';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public usuario: any;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const loginUrl = `${environment.url}${URLS.LOGIN}`;
    return this.http.post(loginUrl, { username, password });
  }

  cadastro(usuario: any): Observable<any> {
    const cadastroUrl = `${environment.url}${URLS.CADASTRO}`;
    return this.http.post(cadastroUrl, usuario);
  }

  logout(): void {
    this.usuario = null;
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('user') !== null;
  }
}
