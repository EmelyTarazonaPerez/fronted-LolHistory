import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsideRoutingModule } from './webside-routing.module';
import { HomeComponent } from './page/home/home.component';
import { ProfileComponent } from '../webside/component/profile/profile.component';
import { ShareModule } from '../share/share.module';
import { ProgressComponent } from '../share/component/progress.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,

  ],
  imports: [
    CommonModule,
    WebsideRoutingModule,
    ShareModule
  ]
})
export class WebsideModule { }
