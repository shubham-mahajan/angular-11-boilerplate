import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  headers: HttpHeaders;
  options: any;
  baseApiUrl = '';

  constructor(
    private httpClient: HttpClient,
  ) {
    this.baseApiUrl = environment.base_url;
    this.options = {
      observe: 'body',
      withCredentials: false
    };
  }

  public post<T>(headers: HttpHeaders, endPoint: string, data: any): Observable<T> {
    const endPointUrl = this.baseApiUrl + endPoint;
    this.options['headers'] = headers;
    return this.httpClient
      .post<T>(endPointUrl, data, this.options)
      .pipe(
        catchError(
          ({ error }): (Observable<any>) =>
            throwError(error || 'server error: api call failed')
        )
      );
  }

  public get<T>(headers: HttpHeaders, endPoint: string, params: HttpParams): Observable<T> {
    const endPointUrl = this.baseApiUrl + endPoint;
    this.options['headers'] = headers;
    return this.httpClient
      .get<T>(endPointUrl, { ...this.options, params })
      .pipe(
        catchError(
          ({ error }): Observable<any> =>
            throwError(error || 'server error: api call failed')
        )
      );
  }

  public put<T>(headers: HttpHeaders, endPoint: string, data: any): Observable<T> {
    const endPointUrl = this.baseApiUrl + endPoint;
    this.options['headers'] = headers;
    return this.httpClient
      .put(endPointUrl, data, this.options)
      .pipe(
        catchError(
          ({ error }): Observable<any> =>
            throwError(error || 'server error: api call failed')
        )
      );
  }

  public patch<T>(headers: HttpHeaders, endPoint: string, data?: any): Observable<T> {
    const endPointUrl = this.baseApiUrl + endPoint;
    this.options['headers'] = headers;
    return this.httpClient
      .patch(endPointUrl, data, this.options)
      .pipe(
        catchError(
          ({ error }): Observable<any> =>
            throwError(error || 'server error: api call failed')
        )
      );
  }

  public delete<T>(headers: HttpHeaders, endPoint: string): Observable<T> {
    const endPointUrl = this.baseApiUrl + endPoint;
    this.options['headers'] = headers;
    return this.httpClient
      .delete<T>(endPointUrl, this.options)
      .pipe(
        catchError(
          ({ error }): Observable<any> =>
            throwError(error || 'server error: api call failed')
        )
      );
  }
}
