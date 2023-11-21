import { Component } from '@angular/core';
import { ProfileService } from 'src/app/service/profile/profile.service';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.scss']
})
export class NabvarComponent {

  names:String = '';

  constructor(private profile: ProfileService){}

  searchPlayer(){
    this.profile.namePlayer.next(this.names)
  }



}
