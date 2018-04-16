import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TryingComponent } from './trying.component';
import {TryingRoutes} from './trying.routing';
import { BackgroundMusicModule } from './background-music/background-music.module';
@NgModule({
  imports: [
    CommonModule,
    TryingRoutes,
    BackgroundMusicModule
  ],
  declarations: [TryingComponent]
})
export class TryingModule { }
