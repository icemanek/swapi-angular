import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { catchError, timeout } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class SwapiConnectionService {
  constructor(private http: HttpClient, private toastrService: ToastrService) {}

  getAll(): Observable<any> {
    return this.http.get("https://swapi.dev/api/planetss/").pipe(
      catchError((err) => {
        this.toastrService.error(err.message);
        return throwError(err);
      })
    );
  }
}
