import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayAudioPage } from './play-audio.page';

const routes: Routes = [
  {
    path: '',
    component: PlayAudioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayAudioPageRoutingModule {}
