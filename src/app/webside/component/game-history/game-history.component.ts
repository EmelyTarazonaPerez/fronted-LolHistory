import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { timeInterval, timeout } from 'rxjs';
import { LastMatches } from 'src/app/model/lastMatches';
import { GameHistoryService } from 'src/app/service/match/game-history.service';
import { ProfileService } from 'src/app/service/profile/profile.service';

@Component({
  selector: 'app-game-history',
  templateUrl: './game-history.component.html',
  styleUrls: ['./game-history.component.scss']
})
export class GameHistoryComponent {

  lastMatches!: LastMatches[]
  @Input() namePlayer!: String;
  showDetail!: boolean

  constructor(private serviceMatch: GameHistoryService, private profile: ProfileService) { }

  ngOnChanges() {
    this.lastMatches = []
    setTimeout(() => {
      this.serviceMatch.getLastMatch().subscribe(data => {
        this.lastMatches = data
        console.log(data)
      })
  }, 1000)

}






}
