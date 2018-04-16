import { Injectable } from '@angular/core';
import { User } from '../user/user.service';

@Injectable()
export class PermissionsService {

    constructor() { }

    canActivate(user: User): boolean {
        return true;
    }
}
