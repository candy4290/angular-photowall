import { AuthGuardService } from './pages/auth/auth-guard.service';

import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/not-found';
import { ModuleWithProviders } from '@angular/core';
import { PreloadSelectedModules } from 'angular-xyy';
import { EmbeddedAuthGuardService } from './pages/auth/embedded-auth-guard.service';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'try', loadChildren: './pages/trying/trying.module#TryingModule'},
    { path: '', redirectTo: 'try', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
