import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundMusicComponent } from './background-music.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
      BackgroundMusicComponent
  ],
  declarations: [BackgroundMusicComponent]
})
export class BackgroundMusicModule { }
