import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsideRoutingModule } from './webside-routing.module';
import { HomeComponent } from './page/home/home.component';
import { ProfileComponent } from '../webside/component/profile/profile.component';
import { ProgressComponent } from '../share/component/progress.component'

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    ProgressComponent

  ],
  imports: [
    CommonModule,
    WebsideRoutingModule,
  ]
})
export class WebsideModule { }
