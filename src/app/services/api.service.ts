import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getCsrfToken() {
    const cookies = document.cookie.split('; ');
    const csrfToken = cookies.find(row => row.startsWith('csrftoken='));
    return csrfToken ? csrfToken.split('=')[1] : null;
  }

  sendPostRequest(data: any) {
    const headers = new HttpHeaders({
      'X-CSRFToken': this.getCsrfToken() || '',
      'Content-Type': 'application/json'
    });

    return this.http.post('http://localhost:8000/api/caderno/aula/', data, {headers});
  }
  }
