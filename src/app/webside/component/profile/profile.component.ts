import { ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, } from '@angular/core';
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
  accountPlayer!: Profile;
  namePlayer: String = 'GatitaRosh';
  statusText = false

  constructor(private serviceProfile: ProfileService) { }

  ngOnInit(): void {
    this.serviceProfile.namePlayer$.subscribe(data => {
      this.serviceProfile.getAccount(data).subscribe(resp => {
        this.accountPlayer = resp
        this.statusText = true
      }, error => {
        console.log(error.statusText)
        this.statusText = false
      })
      this.namePlayer = data
    })
  }

}
