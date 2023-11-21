import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { LastMatches } from 'src/app/model/lastMatches';
import { GameHistoryService } from 'src/app/service/match/game-history.service';
import { ProfileService } from 'src/app/service/profile/profile.service';

@Component({
  selector: 'app-game-history',
  templateUrl: './game-history.component.html',
  styleUrls: ['./game-history.component.scss']
})
export class GameHistoryComponent {

  @Input() lasMatches!: LastMatches[]
  @Input() namePlayer!: String;

  constructor(private serviceMatch: GameHistoryService, private profile: ProfileService) { }

  ngOnChanges(change: SimpleChanges) {
    console.log(this.namePlayer)
    if (change['namePlayer'].currentValue != change['namePlayer'].previousValue) {
      console.log("search button")
    }
  }

  summaryDamage() {
    this.serviceMatch.getSummaryDamage('1700021344065').subscribe(data => console.log(data))
  }



}
