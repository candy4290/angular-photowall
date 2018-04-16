import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    }
];

export const LoginRoutes: ModuleWithProviders = RouterModule.forChild(routes);
