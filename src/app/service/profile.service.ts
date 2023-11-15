import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from "../model/profile"

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http : HttpClient) { }

  getAccount (namePlayer : String) {
    return this.http.get<Profile>(`servidor/account/${namePlayer}`)
  }



}
