import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ConfirmationService } from 'angular-xyy';

export class Leave {
    leave: boolean;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<Leave> {
    constructor(private confirmationService: ConfirmationService) { }

    canDeactivate(component: Leave, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return new Observable((observer) => {
            if (component.leave) {
                observer.next(true);
                observer.complete();
            } else {
                this.confirmationService.confirm({
                    header: '确认要离开吗？',
                    icon: 'fa fa-question-circle',
                    message: '你已经填写了部分表单离开会放弃已经填写的内容。',
                    accept: () => {
                        observer.next(true);
                        observer.complete();
                    },
                    reject: () => {
                        observer.next(false);
                        observer.complete();
                    }
                });
            }
        });
    }


}
