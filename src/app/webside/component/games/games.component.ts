import { Component, Input } from '@angular/core';
import { LastMatches } from 'src/app/model/lastMatches';
import { GameHistoryService } from 'src/app/service/match/game-history.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {

  @Input() match!: LastMatches
  showDetail!:boolean
  constructor(private serviceMatch : GameHistoryService){
  }

  summaryDamage(gameStartTimestamp : number) {
    this.serviceMatch.getSummaryDamage(gameStartTimestamp).subscribe( data => {console.log(data), this.showDetail = true} )
  }
}
