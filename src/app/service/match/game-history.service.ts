import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LastMatches } from 'src/app/model/lastMatches';
import { SummaryDamage } from 'src/app/model/summaryDamage';

@Injectable({
  providedIn: 'root'
})
export class GameHistoryService {

  constructor(private http : HttpClient) { }

  getLastMatch () {
    return this.http.get<LastMatches[]>(`servidor/last-matches`)
  }

  getSummaryDamage (startTime : string) {
    return this.http.get<SummaryDamage[]>(`servidor/summary-damage/${startTime}`)
  }
}
