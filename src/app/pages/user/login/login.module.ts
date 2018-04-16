import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
// import { ButtonModule, GridModule } from 'fis-ui';
import { FormService } from '../../core/form.service';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PasswdFormComponent } from './passwd-form/passwd-form.component';
import { LoginRoutes } from './login.routing';
import { WebSocketService } from '../../common/web-socket.service';

@NgModule({
    imports: [
        SharedModule,
        // ButtonModule,
        LoginRoutes,
        // GridModule
    ],
    declarations: [
        LoginComponent,
        LoginFormComponent,
        PasswdFormComponent
    ],
    providers: [
        // FormService
        WebSocketService
    ]
})
export class LoginModule {}
