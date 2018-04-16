import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
            // { path: 'login', component: LoginComponent },
            // { path: 'changepwd', component: ChangePwdComponent },
        ]
    }
];

export const UserRoutes: ModuleWithProviders = RouterModule.forChild(routes);
