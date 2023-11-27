import { Component, Input, Output } from '@angular/core';
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

  showDivDetail(date : number) {
    this.showDetail = true
  }
}
