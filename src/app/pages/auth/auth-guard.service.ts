import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    CanLoad,
    Route,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { AuthService } from './auth.service';
import { Constants } from '../core/app-config';
import { NotificationsService } from 'angular-xyy';
import { UserService } from '../user/user.service';

/**
 * 认证路由守卫
 *
 * @export
 * @class AuthGuardService
 * @implements {CanActivate}
 * @implements {CanActivateChild}
 */
@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {

    constructor(private notifications: NotificationsService,
                private auth: AuthService,
                private user: UserService,
                private router: Router) { }

    /**
     * 处理导航到某路由的情况
     * 种类型的 Guard 用来控制是否允许进入当前的路径
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {(boolean | Observable<boolean> | Promise<boolean>)}
     *
     * @memberOf AuthGuardService
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (this.auth.accessToken == null) {
            return this.user.redirectLogin(state);
        }
        if (this.auth.authenticated()) {
            return true;
        } else {
            // 设置当前访问的url，登录后重新进入该地址
            this.notifications.error('当前用户已被签退');
            return this.user.redirectLogin(state);
        }
    }

    /**
     * 处理导航到子路由的情况
     * 这种类型的 Guard 用来控制是否允许进入当前路径的所有子路径
     *
     * @param {ActivatedRouteSnapshot} childRoute
     * @param {RouterStateSnapshot} state
     * @returns {(boolean | Observable<boolean> | Promise<boolean>)}
     *
     * @memberOf AuthGuardService
     */
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate(childRoute, state);
    }

    /**
     * 惰性加载特性路由
     * CanLoad守卫（在加载特性模块之前进行检查）
     * 用于控制一个异步加载的子模块是否允许被加载
     *
     * @param {Route} route
     * @returns {(boolean | Observable<boolean> | Promise<boolean>)}
     *
     * @memberOf AuthGuardService
     */
    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
        return true;
    }

}
