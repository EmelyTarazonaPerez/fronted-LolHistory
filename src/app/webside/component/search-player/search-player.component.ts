import { Component } from '@angular/core';
import { GameHistoryService } from 'src/app/service/match/game-history.service';
import { ProfileService } from 'src/app/service/profile/profile.service';

@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.scss']
})
export class SearchPlayerComponent {

  names:String = '';

  constructor(private profile: ProfileService, private match : GameHistoryService){}

  searchPlayer(){
    this.profile.namePlayer.next(this.names)
  }
}
