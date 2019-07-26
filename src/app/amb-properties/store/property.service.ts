import { Injectable } from '@angular/core';
import { CONSTANTS } from 'src/app/app.constants';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  endPoints = CONSTANTS['URLS'];

  constructor(private http: HttpClient) { }


  getProperties(): Observable<any> {

    const uri = this.endPoints['PROPERTIES'];

    return this.http.get(uri).pipe(catchError((error: any) => <any>throwError(error)));

  }
}
