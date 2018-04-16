import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Constants } from '../../app-config';
import { AuthService } from '../../../auth/auth.service';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let r = req;
        if (this.auth.accessToken != null) {
            r = req.clone({
                // headers: req.headers.set('Access-Token', 'xyy')
                setHeaders: {
                    'Access-Token': this.auth.accessToken
                }
            });
        }
        return next.handle(r);
    }
}

