import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComtabilidadePage } from './comtabilidade';

@NgModule({
  declarations: [
    ComtabilidadePage,
  ],
  imports: [
    IonicPageModule.forChild(ComtabilidadePage),
  ],
})
export class ComtabilidadePageModule {}
