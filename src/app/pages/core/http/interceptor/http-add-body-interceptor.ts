import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';

@Injectable()
export class HttpChangeBodyInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let r = req;
        r = req.clone({
            setParams: {
                'userCode': 'admin'
            }
        });
        return next.handle(r);
    }
}

