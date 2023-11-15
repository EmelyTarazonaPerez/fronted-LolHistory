import { Component } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  porcentageWins: number =  50;

  constructor(private serviceProfile: ProfileService){}

  ngOnInit(): void{
    this.serviceProfile.getAccount('GatitaRosh').subscribe(data => console.log(data))
  }
}
