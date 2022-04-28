import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {

  }
  token: any;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', req);

    const headers = new HttpHeaders().set('Authorization', 'JWT '+ this.authService.getToken());

    const copiedReq = req.clone({headers: headers});

    if (this.authService.getToken()) {
      return next.handle(copiedReq);
    } else {
      return next.handle(req);
    }

  }

}
