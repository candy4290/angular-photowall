import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';
import { JwtHelper } from 'angular2-jwt';
import { HttpService, LocalStorageService } from 'angular-xyy';
import { Constants } from '../core/app-config';
import { Http } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import { Router, RouterStateSnapshot } from '@angular/router';

export interface User {
	userCode: string;
    userName: string;
    roleId: string[];
}

@Injectable()
export class UserService {

    constructor(private http: HttpService,
                private auth: AuthService,
                private router: Router,
                private storage: LocalStorageService,
                private jwtHelper: JwtHelper
    ) {}

    /**
       * 获取登录令牌
       *
       * @param {string} userName
       * @param {*} password
       * @returns {Observable<string>}
       *
       * @memberOf AuthService
       */
    login(userName: string, password: string, verifyCode: string): Observable<any> {
        const req = {
            transCode: 'user.login',
            userCode: userName,
            userPwd: password,
            verifyCode: verifyCode
        };
        return this.http.post(req).map(
            data => {
                const redirectUrl = this.storage.get(Constants.REDIRECT_URL);
                if (redirectUrl != null) {
                    this.storage.remove(Constants.REDIRECT_URL);
                    this.router.navigate([redirectUrl]);
                } else {
                    this.router.navigate(['.']);
                }
            }
        );
    }

    getVerifyCode(): Observable<any> {
        const req = {
            transCode: 'user.getVerifyCode'
        };
        return this.http.post(req);
    }

    redirectLogin(state?: RouterStateSnapshot) {
        if (state) {
            this.storage.set(Constants.REDIRECT_URL, state.url);
        } else {
            this.storage.remove(Constants.ACCESS_TOKEN);
        }
        this.router.navigate(['user', 'login']);
        return false;
    }

    /**
     * 获取当前用户
     *
     * @returns {User}
     *
     * @memberOf UserService
     */
    getUser(): User {
        if (this.auth.accessToken) {
            return this.jwtHelper.decodeToken(this.auth.accessToken);
        }
        return null;
    }

    changePwd(userName: string, oldPassword: string, newPassword: string): Observable<any> {
        const req = {
            transCode: 'user.changePassword',
            userCode: userName,
            userPwd: oldPassword,
            newPwd: newPassword
        };
        return this.http.post(req);
    }

}
