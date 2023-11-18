import { Component } from '@angular/core';
import { LeagueEntry } from 'src/app/model/leagueEntry';
import { Profile } from 'src/app/model/profile';
import { ProfileService } from 'src/app/service/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  porcentageWins: number = 50;
  accountPlayer!: Profile

  constructor(private serviceProfile: ProfileService) { }

  ngOnInit(): void {
    this.serviceProfile.getAccount('GatitaRosh').subscribe(
      data => this.accountPlayer = data)
  }
}
