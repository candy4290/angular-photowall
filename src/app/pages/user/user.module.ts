import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserRoutes } from './user.routing';
import { LoginComponent } from './login/login.component';
import { FormService } from '../core/form.service';
import { SharedModule } from '../shared/shared.module';
import { UserService } from './user.service';
import { LoginFormComponent } from './login/login-form/login-form.component';
// import { ButtonModule } from 'fis-ui';
import { LoginModule } from './login/login.module';

@NgModule({
    imports: [
        SharedModule,
        UserRoutes,
        LoginModule,
        // ButtonModule
    ],
    declarations: [
        UserComponent
    ],
    providers: [
        UserService,
        FormService
    ]
})
export class UserModule {}
