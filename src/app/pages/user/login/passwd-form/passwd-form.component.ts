import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { FormService } from '../../../core/form.service';
import { UserService } from '../../user.service';
import { NotificationsService } from 'angular-xyy';

@Component({
  selector: 'ks-passwd-form',
  templateUrl: './passwd-form.component.html',
  styleUrls: ['./passwd-form.component.scss']
})
export class PasswdFormComponent implements OnInit, OnDestroy {
    myForm: FormGroup;
    loading: boolean;
    private user$: Subscription;

    @Output() backToLogin = new EventEmitter<any>();

    constructor(private fb: FormBuilder,
                private form: FormService,
                private user: UserService,
                private notifications: NotificationsService
    ) {
        this.myForm = fb.group({
            userName: this.form.userName(),
            password: this.form.password(),
            newPassword: this.form.newPassword('confirmPassword'),
            confirmPassword: this.form.confirmPassword('newPassword')
        });
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        if (this.user$) {
            this.user$.unsubscribe();
        }
    }

    doIt(): void {
        this.loading = true;
        this.user$ = this.user.changePwd(this.myForm.value.userName, this.myForm.value.password, this.myForm.value.newPassword).subscribe(
            data => {
                this.myForm.reset();
                this.notifications.success('修改密码成功！');
                this.backToLogin.emit(true);
            },
            error => {
                this.loading = false;
            }
        );
    }

}
