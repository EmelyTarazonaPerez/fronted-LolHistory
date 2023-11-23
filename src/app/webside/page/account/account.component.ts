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


}
