import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './component/progress/progress.component';
import { NabvarComponent } from './component/nabvar/nabvar.component';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './component/spinner/spinner.component';


@NgModule({
  declarations: [
    ProgressComponent,
    NabvarComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProgressComponent,
    NabvarComponent,
    SpinnerComponent
  ]
})
export class ShareModule { }
