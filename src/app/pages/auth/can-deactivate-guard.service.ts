/**
 * 处理未保存的更改
 */
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

export interface CanComponentDeactivate {

    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;

}

@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate> {

    canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.log(`离开当前路由：${currentRoute.url}`);
        return component.canDeactivate ? component.canDeactivate() : true;
    }

}
