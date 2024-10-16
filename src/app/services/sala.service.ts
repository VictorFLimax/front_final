import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sala } from '../models/sala';

@Injectable({
  providedIn: 'root'
})
export class SalaService {
  private url: string = "http://localhost:8000/api/caderno/aula/";

  constructor(private http: HttpClient) {}

  getAll(): Observable<Sala[]> {
    return this.http.get<Sala[]>(this.url);
  }

  save(sala: Sala): Observable<Sala> {
    return this.http.post<Sala>(this.url, sala);
  }

  getById(id: string): Observable<Sala> {
    return this.http.get<Sala>(`${this.url}/${id}`);
  }
}
