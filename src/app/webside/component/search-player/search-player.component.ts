import { Component } from '@angular/core';
import { GameHistoryService } from 'src/app/service/match/game-history.service';
import { ProfileService } from 'src/app/service/profile/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.scss']
})
export class SearchPlayerComponent {

  names:String = '';

  constructor(private profile: ProfileService, private router: Router){}

  searchPlayerByUrl(){
    this.profile.namePlayer.next(this.names)
    this.router.navigateByUrl("/profile")
  }
}
