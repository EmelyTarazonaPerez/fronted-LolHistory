import { Component } from '@angular/core';
import { GameHistoryService } from 'src/app/service/match/game-history.service';
import { ProfileService } from 'src/app/service/profile/profile.service';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.scss']
})
export class NabvarComponent {

  names:String = '';

  constructor(private profile: ProfileService, private match : GameHistoryService){}

  searchPlayer(){
    this.profile.namePlayer.next(this.names)


  }



}
