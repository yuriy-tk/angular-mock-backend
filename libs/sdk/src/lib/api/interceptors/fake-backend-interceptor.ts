import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { DataManagementService } from '../data-management.service';

@Injectable({ providedIn: 'root' })
export class FakeBackendInterceptor implements HttpInterceptor {
  constructor(private readonly dataManagement: DataManagementService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // wrap in delayed observable to simulate server api call
    return of(null).pipe(
      mergeMap(() => {
        // get cows
        if (request.url.endsWith('/api/cows') && request.method === 'GET') {
          // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
          return of(
            new HttpResponse({
              status: 200,
              body: this.dataManagement.getCows()
            })
          );
        }

        // remove cow
        if (
          request.url.match(/\/api\/cows\/\d+$/) &&
          request.method === 'DELETE'
        ) {
          const urlParts = request.url.split('/');
          const id = +urlParts[urlParts.length - 1];

          if (id) {
            return of(
              new HttpResponse({
                status: 200,
                body: this.dataManagement.removeCow(id)
              })
            );
          } else {
            throwError('Error: Wrong or missed ID provided');
          }
        }

        // update cow
        if (request.url.endsWith('/api/cows') && request.method === 'PUT') {
          if (request.body && request.body.cow) {
            return of(
              new HttpResponse({
                status: 200,
                body: this.dataManagement.updateCow(request.body.cow)
              })
            );
          } else {
            throwError('Error: Cannot update cow. Please try aging later');
          }
        }

        // create cow
        if (request.url.endsWith('/api/cows') && request.method === 'POST') {
          return of(
            new HttpResponse({
              status: 200,
              body: this.dataManagement.createCow()
            })
          );
        }

        // pass through any requests not handled above
        return next.handle(request);
      })
    );
  }
}
