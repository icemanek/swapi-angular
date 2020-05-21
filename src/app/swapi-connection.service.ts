import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiConnectionService {

  constructor(private http: HttpClient) { }



getAll(): Observable<any> {

    return this.http.get('https://swapi.dev/api/planets/')
    .pipe(

      retry(5),
      catchError(this.handleError)

    )
    
    } 



handleError(error) {

  let errorMessage = '';

  if (error.error instanceof ErrorEvent) {

    // client-side error

    errorMessage = `Error: ${error.error.message}`;

  } else {

    // server-side error

    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

  }

  window.alert(errorMessage);

  return throwError(errorMessage);

}



}