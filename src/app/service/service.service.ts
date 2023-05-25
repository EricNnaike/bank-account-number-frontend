import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  erroStatus = false;
  errorMessage: any = [];

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:9001/api";

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      //console.error('An error occurred:', error.error);
      this.errorMessage.push(error.error);
    } else {
      this.errorMessage.push(error.error.message);
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  createAccount(url:string, body: any, options:Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}/${url}`, body, options);
  }




}
