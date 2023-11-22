import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsideRoutingModule } from './webside-routing.module';
import { AccountComponent } from './page/account/account.component';
import { ProfileComponent } from '../webside/component/profile/profile.component';
import { ShareModule } from '../share/share.module';
import { ProgressComponent } from '../share/component/progress.component';
import { GameHistoryComponent } from './component/game-history/game-history.component';
import { LeagueComponent } from './component/league/league.component';
import {QueueTypePipe} from '../pipe/queue-type.pipe'
import { HomeComponent } from './page/home/home.component';

@NgModule({
  declarations: [
    AccountComponent,
    ProfileComponent,
    GameHistoryComponent,
    LeagueComponent,
    QueueTypePipe,
    HomeComponent

  ],
  imports: [
    CommonModule,
    WebsideRoutingModule,
    ShareModule
  ]
})
export class WebsideModule { }
