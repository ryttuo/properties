import { Injectable } from '@angular/core';
import { CONSTANTS } from 'src/app/app.constants';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  endPoints = CONSTANTS['URLS'];

  constructor(private http: HttpClient) { }


  getArticles(): Observable<any> {

    const uri = this.endPoints['ARTICLES'];

    return this.http.get(uri).pipe(catchError((error: any) => <any>throwError(error)));

  }

}
