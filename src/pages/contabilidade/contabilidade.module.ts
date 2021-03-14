import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContabilidadePage } from './contabilidade';

@NgModule({
  declarations: [
    ContabilidadePage,
  ],
  imports: [
    IonicPageModule.forChild(ContabilidadePage),
  ],
})
export class ContabilidadePageModule {}
