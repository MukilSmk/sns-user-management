import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}



  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Check if the request is a GET request
    if (req.method === 'GET') {
      const token = this.authService.getAuthorization();

      // Clone the request and add the Authorization header with the Bearer token
      const modifiedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      // Pass the modified request to the next handler
      return next.handle(modifiedReq);
    }

    // For non-GET requests, pass the original request
    return next.handle(req);
  }
}
