import { Component, Input } from '@angular/core';
import { LeagueEntry } from 'src/app/model/leagueEntry';
import { ProfileService } from 'src/app/service/profile/profile.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent {

  leaguePlayer!: LeagueEntry[]
  @Input() namePlayer!: String

  constructor(private serviceProfile: ProfileService) { }

  ngOnChanges(){
    this.serviceProfile.getLeaguePlayer(this.namePlayer).subscribe(
      data => {
        this.leaguePlayer = data
      })
  }

  ngOnInit(): void {
      this.serviceProfile.getLeaguePlayer(this.namePlayer).subscribe(
      data => this.leaguePlayer =data)
  }

}
