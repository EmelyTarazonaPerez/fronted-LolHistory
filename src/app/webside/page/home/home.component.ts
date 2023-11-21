import { Component } from '@angular/core';
import { LastMatches } from 'src/app/model/lastMatches';
import { GameHistoryService } from 'src/app/service/match/game-history.service';
import { ProfileService } from 'src/app/service/profile/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  namePlayer!: String;
  lasMatches!: LastMatches[]

  constructor(private serviceProfile: ProfileService, private serviceMatch: GameHistoryService) { }

  ngOnInit(): void {
    this.serviceProfile.namePlayer$.subscribe(data => {
      this.serviceMatch.getLastMatch().subscribe(data => console.log(data))
      this.namePlayer = data
  })}
}
