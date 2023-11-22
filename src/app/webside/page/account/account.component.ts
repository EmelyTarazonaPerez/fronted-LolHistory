import { Component } from '@angular/core';
import { LastMatches } from 'src/app/model/lastMatches';
import { GameHistoryService } from 'src/app/service/match/game-history.service';
import { ProfileService } from 'src/app/service/profile/profile.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  namePlayer!: String;
  constructor(private serviceProfile: ProfileService, private serviceMatch: GameHistoryService) { }

  ngOnInit(): void {
    this.serviceProfile.namePlayer$.subscribe(data => {
      this.namePlayer = data
      console.log(data)
  })}

  ngAfterViewInit(){
    console.log("--afterView-init--")
  }
}
