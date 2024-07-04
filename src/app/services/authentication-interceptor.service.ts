import {Injectable} from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {HttpHandler, HttpParams, HttpRequest} from "@angular/common/http";
import {exhaustMap, take} from "rxjs";

@Injectable()
export class AuthenticationInterceptorService {
  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("hello from the interceptor");

    return this.authenticationService.user.pipe(
      take(1),
      exhaustMap(user => {
        console.log(user);
        if (!user) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${user.token}`
          }
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
