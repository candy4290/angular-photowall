import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormService } from '../../../core/form.service';
import { UserService } from '../../user.service';
import { Subscription } from 'rxjs/Subscription';
import { LocalStorageService, NotificationsService } from 'angular-xyy';
import { Constants } from '../../../core/app-config';

@Component({
    selector: 'ks-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {
    myForm: FormGroup;
    loading: boolean;

    needVerify: boolean;
    errorVerifyCount: number;
    verifyCode: string;
    content: any;

    private user$: Subscription;
    private captcha$: Subscription;

    constructor(private fb: FormBuilder,
                private form: FormService,
                private storage: LocalStorageService,
                private user: UserService,
                private notifications: NotificationsService
    ) {
        this.myForm = fb.group({
            userName: this.form.userName(this.storage.get(Constants.USER_NAME)),
            password: this.form.password(),
            remember: [false],
            captcha: ['', [this.captchaValidator]],
        });
    }

    ngOnInit(): void {
        this.refreshCaptcha();
    }

    ngOnDestroy(): void {
        if (this.captcha$) {
            this.captcha$.unsubscribe();
        }
        if (this.user$) {
            this.user$.unsubscribe();
        }
    }

    refreshCaptcha() {
        if (this.captcha$) {
            this.captcha$.unsubscribe();
        }
        this.captcha$ = this.user.getVerifyCode().subscribe(
            data => {
                this.needVerify = data.needVerify === 'true';
                if (this.needVerify) {
                    this.verifyCode = data.verifyCode;
                    if (this.errorVerifyCount == null) {
                        this.errorVerifyCount = data.errorVerifyCount;
                    }
                    this.content = 'data:image/jpeg;base64,' + data.CONTENT;
                }
            }
        );
    }

    captchaValidator = (control: FormControl): { [s: string]: boolean } => {
        if (this.needVerify && (control.value == null || control.value.toLocaleLowerCase() !== this.verifyCode.toLocaleLowerCase())) {
            return { captcha: true };
        }
    }

    onLogin(): void {
        this.loading = true;
        this.user$ = this.user.login(this.myForm.value.userName, this.myForm.value.password, this.myForm.value.captcha).subscribe(
            data => {
                if (this.myForm.value.remember) {
                    this.storage.set(Constants.USER_NAME, this.myForm.value.userName);
                }
                this.loading = false;
            },
            error => {
                this.loading = false;
                this.errorVerifyCount--;
                this.myForm.controls.captcha.reset();
                this.refreshCaptcha();
            }
        );
    }

}
