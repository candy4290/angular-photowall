import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/animations';
import { PasswdFormComponent } from './passwd-form/passwd-form.component';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [
        trigger('passwordShowAnimation', [
            state('hidden', style({
                display: 'none',
                width: 0
            })),
            state('visible', style({
                display: 'block',
                width: '500px'
            })),
            transition('visible <=> hidden', animate('800ms cubic-bezier(0.68, -0.55, 0.27, 1.55)'))
        ])
    ]
})

export class LoginComponent implements OnInit, OnDestroy {
    passwordShow: Boolean = false;

    @ViewChild(PasswdFormComponent) private passwd: PasswdFormComponent;

    constructor() {}

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }

    getPasswordForm() {
        this.passwordShow = true;
    }

    getloginForm() {
        // 清空Form
        this.passwordShow = false;
        this.passwd.myForm.reset();
        // Object.keys(this.passwd.myForm.controls).forEach(key => {
        //     this.passwd.myForm.controls[key].markAsPristine();
        // });
    }

}
