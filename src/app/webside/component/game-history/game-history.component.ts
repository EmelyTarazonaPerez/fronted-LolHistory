import { Component } from '@angular/core';
import { LastMatches } from 'src/app/model/lastMatches';
import { GameHistoryService } from 'src/app/service/match/game-history.service';

@Component({
  selector: 'app-game-history',
  templateUrl: './game-history.component.html',
  styleUrls: ['./game-history.component.scss']
})
export class GameHistoryComponent {

  lasMatches! :  LastMatches[]

  constructor(private serviceMatch: GameHistoryService) {}
  ngOnInit(){
    this.serviceMatch.getLastMatch().subscribe(
      data => this.lasMatches = data
     )
  }

  summaryDamage(){
    this.serviceMatch.getSummaryDamage('1700021344065').subscribe(data => console.log(data))
  }
}
