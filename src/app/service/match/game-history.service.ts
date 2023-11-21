import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LastMatches } from 'src/app/model/lastMatches';
import { SummaryDamage } from 'src/app/model/summaryDamage';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameHistoryService {

  constructor(private http : HttpClient) { }

  getLastMatch (): Observable<LastMatches[]> {
    return this.http.get<LastMatches[]>(`servidor/last-matches`).pipe(retry(10))
  }

  getSummaryDamage (startTime : string) {
    return this.http.get<SummaryDamage[]>(`servidor/summary-damage/${startTime}`)
  }
}
