import { ConfigService, LocalStorageService } from 'angular-xyy';
import { Constants } from './../core/app-config';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
    private jwt: string;

    constructor(private config: ConfigService, private storage: LocalStorageService) { }

    get accessToken(): string {
        return this.storage.get(Constants.ACCESS_TOKEN);
    }


    /**
     * 检查是否通过身份验证
     *
     * @returns {boolean} 校验通过：true
     *
     * @memberOf AuthService
     */
    authenticated(accessToken?: string): boolean {
        const jwt = accessToken || this.accessToken;
        if (jwt == null) {
            return false;
        } else {
            let flag: boolean;
            try {
                flag = tokenNotExpired(Constants.ACCESS_TOKEN, jwt);
                if (!flag) {
                    this.storage.remove(Constants.ACCESS_TOKEN);
                }
            } catch (error) {
                this.storage.remove(Constants.ACCESS_TOKEN);
            }
            return flag;
        }
    }

}
