import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from 'angular-xyy';
import { Constants } from '../../app-config';

/**
 * HTTP Response Token
 *
 * @export
 * @class HttpResponseTokenInterceptor
 * @implements {HttpInterceptor}
 */
@Injectable()
export class HttpResponseTokenInterceptor implements HttpInterceptor {

    constructor(private storage: LocalStorageService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .do((event: any) => {
                if (event instanceof HttpResponse) {
                    const token = event.headers.get(Constants.ACCESS_TOKEN);
                    // this.storage.remove(Constants.ACCESS_TOKEN);
                    if (token != null) {
                        this.storage.set(Constants.ACCESS_TOKEN, event.headers.get(Constants.ACCESS_TOKEN));
                    }
                }
            });
    }
}
