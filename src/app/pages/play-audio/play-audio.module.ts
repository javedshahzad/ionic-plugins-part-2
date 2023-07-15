import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayAudioPageRoutingModule } from './play-audio-routing.module';

import { PlayAudioPage } from './play-audio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayAudioPageRoutingModule
  ],
  declarations: [PlayAudioPage]
})
export class PlayAudioPageModule {}
