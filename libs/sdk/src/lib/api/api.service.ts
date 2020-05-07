import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CowEntity } from './api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private cowsUrl = '/api/cows';

  constructor(private readonly http: HttpClient) {}

  /***
   * Fetch cows from the server
   */
  getCows(): Observable<CowEntity[]> {
    return this.http.get<CowEntity[]>(this.cowsUrl).pipe(
      map(res => res),
      catchError(this.handleError<CowEntity[]>('getCows', []))
    );
  }

  /***
   * Create cow and get empty new entity
   * @param cow
   */
  create(cow?: CowEntity): Observable<CowEntity> {
    return this.http.post<CowEntity>(this.cowsUrl, cow).pipe(
      map(res => res),
      catchError(this.handleError)
    );
  }

  /**
   * Update existing entity
   * @param cow
   */
  update(cow: CowEntity): Observable<boolean> {
    return this.http
      .put<boolean>(this.cowsUrl, { cow })
      .pipe(
        map(res => res),
        catchError(this.handleError)
      );
  }

  /**
   * Delete cow by id
   * @param cowId
   */
  delete(cowId: number): Observable<boolean> {
    return this.http.delete<boolean>(this.cowsUrl + '/' + cowId).pipe(
      map(res => res),
      catchError(this.handleError)
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      // this.log(`${operation} failed: ${error.message}`);
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
