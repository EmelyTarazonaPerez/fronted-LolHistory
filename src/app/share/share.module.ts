import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './component/progress/progress.component';
import { NabvarComponent } from './component/nabvar/nabvar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProgressComponent,
    NabvarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProgressComponent,
    NabvarComponent
  ]
})
export class ShareModule { }
