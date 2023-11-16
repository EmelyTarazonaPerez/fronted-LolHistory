import { Component } from '@angular/core';
import { LeagueEntry } from 'src/app/model/leagueEntry';
import { ProfileService } from 'src/app/service/profile/profile.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent {

  leaguePlayer!: LeagueEntry[]

  constructor(private serviceProfile: ProfileService) { }

  ngOnInit(): void {
      this.serviceProfile.getLeaguePlayer('GatitaRosh').subscribe(
      data => this.leaguePlayer =data)
  }
}
