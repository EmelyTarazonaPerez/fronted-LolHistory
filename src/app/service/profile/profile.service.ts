import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from "../../model/profile"
import { LeagueEntry } from '../../model/leagueEntry';
import { BehaviorSubject, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http : HttpClient) { }

  namePlayer = new BehaviorSubject<String>('');
  namePlayer$ = this.namePlayer.asObservable();

  getAccount (namePlayer : String) {
    return this.http.get<Profile>(`servidor/account/${namePlayer}`)
  }

  getLeaguePlayer(namePlayer:String) {
    return this.http.get<LeagueEntry[]>(`servidor/account/league/${namePlayer}`)
  }

  getLoginAndMatch(name : String) {
    return this.getAccount(name)
      .pipe(
        switchMap(() => this.getLeaguePlayer(name))
      )
  }


}
