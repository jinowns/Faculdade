import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicinaPage } from './medicina';

@NgModule({
  declarations: [
    MedicinaPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicinaPage),
  ],
})
export class MedicinaPageModule {}
