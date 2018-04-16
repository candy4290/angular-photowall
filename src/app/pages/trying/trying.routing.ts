import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TryingComponent } from './trying.component';
const routes: Routes = [
  {
        path: '',
        component: TryingComponent,
    }
];

export const TryingRoutes: ModuleWithProviders = RouterModule.forChild(routes);
