import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from '../share/component/progress.component';
import { NabvarComponent } from './component/nabvar/nabvar.component'


@NgModule({
  declarations: [
    ProgressComponent,
    NabvarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProgressComponent,
    NabvarComponent
  ]
})
export class ShareModule { }
