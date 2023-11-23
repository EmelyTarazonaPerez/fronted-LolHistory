import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsideRoutingModule } from './webside-routing.module';
import { AccountComponent } from './page/account/account.component';
import { ProfileComponent } from '../webside/component/profile/profile.component';
import { ShareModule } from '../share/share.module';
import { GameHistoryComponent } from './component/game-history/game-history.component';
import { LeagueComponent } from './component/league/league.component';
import { QueueTypePipe } from '../pipe/queue-type.pipe'
import { HomeComponent } from './page/home/home.component';
import { SearchPlayerComponent } from './component/search-player/search-player.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component'

@NgModule({
  declarations: [
    AccountComponent,
    ProfileComponent,
    GameHistoryComponent,
    LeagueComponent,
    QueueTypePipe,
    HomeComponent,
    SearchPlayerComponent,
    LayoutComponent

  ],
  imports: [
    CommonModule,
    WebsideRoutingModule,
    ShareModule,
    FormsModule
  ]
})
export class WebsideModule { }
