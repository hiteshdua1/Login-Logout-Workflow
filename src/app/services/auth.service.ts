import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(formValue): Observable<any> {
    const body = JSON.stringify(formValue);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post('/login', body, httpOptions);
  }

  logout(): Observable<any> {
    return this.http.get('/logout');
  }
}
