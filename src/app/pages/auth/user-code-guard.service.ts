import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Constants } from '../core/app-config';
import { NotificationsService } from 'angular-xyy';
import {
    Router,
    Route,
    CanLoad,
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class UserCodeGuardService implements CanActivate, CanActivateChild, CanLoad {

    constructor(private auth: AuthService,
                private notifications: NotificationsService,
                private router: Router) {
    }

    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        throw new Error('Method not implemented.');
    }

}
