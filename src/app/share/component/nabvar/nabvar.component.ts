import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GameHistoryService } from 'src/app/service/match/game-history.service';
import { ProfileService } from 'src/app/service/profile/profile.service';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NabvarComponent {

  names:String = '';

  constructor(private profile: ProfileService, private match : GameHistoryService){}

  searchPlayer(){
    console.log('hola')
    console.log(this.names)
    this.profile.namePlayer.next(this.names)
  }

}
