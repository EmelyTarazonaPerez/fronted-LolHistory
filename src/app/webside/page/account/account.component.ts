import { Component } from '@angular/core';
import { zip } from 'rxjs';
import { LastMatches } from 'src/app/model/lastMatches';
import { LeagueEntry } from 'src/app/model/leagueEntry';
import { Profile } from 'src/app/model/profile';
import { GameHistoryService } from 'src/app/service/match/game-history.service';
import { ProfileService } from 'src/app/service/profile/profile.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  namePlayer!: String;
  constructor(private serviceProfile: ProfileService, private match: GameHistoryService) { }
  textStatus!: boolean;

  ngOnInit(): void {
    this.serviceProfile.namePlayer$.subscribe(data => {
      this.namePlayer = data
      console.log(data)
      this.serviceProfile.getAccount(this.namePlayer).subscribe(
        (data) => { console.log(data), this.textStatus = false}, error => { this.textStatus = true, console.log(error) });
    })
  }
}

