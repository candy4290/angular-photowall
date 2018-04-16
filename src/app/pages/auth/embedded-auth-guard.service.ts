import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { NotificationsService, LocalStorageService, ConfigService, HttpService } from 'angular-xyy';
import { Constants } from '../core/app-config';
import { Route } from '@angular/compiler/src/core';

@Injectable()
export class EmbeddedAuthGuardService implements CanActivate, CanActivateChild, CanLoad {
    constructor(private notifications: NotificationsService,
        private auth: AuthService,
        private storage: LocalStorageService,
        private router: Router,
        private http: HttpService,
        private config: ConfigService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.checkLogin();
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate(childRoute, state);
    }

    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
        return this.checkLogin();
    }

    private checkLogin(): boolean | Promise<boolean> {
        if (this.auth.accessToken == null) {
            return this.check();
        }
        if (this.auth.authenticated()) {
            return true;
        } else {
            return this.check();
        }
    }

    private check(): Promise<boolean> {
        return this.http.post({ transCode: 'common.refreshToken'}).toPromise().then(data => true).catch(err => {
            // TODO 这里跳转还有问题
            const loginUrl = this.config.get('url.login');
            this.router.navigate([`${loginUrl}`]);
            return false;
        });
    }

}
