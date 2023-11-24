import { Injectable } from '@angular/core';
import { HttpClient, HttpStatusCode , HttpErrorResponse} from '@angular/common/http';
import { LastMatches } from 'src/app/model/lastMatches';
import { SummaryDamage } from 'src/app/model/summaryDamage';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, switchMap } from 'rxjs/operators';
import { ProfileService } from '../profile/profile.service';

@Injectable({
  providedIn: 'root'
})
export class GameHistoryService {

  constructor(private http : HttpClient, private profile : ProfileService) { }

  getLastMatch (): Observable<LastMatches[]> {
    return this.http.get<LastMatches[]>(`servidor/last-matches`).pipe(
      catchError((error : HttpErrorResponse) => {
        return throwError('Ups hubo un error')
      })
    )
  }

  getSummaryDamage (startTime : string) {
    return this.http.get<SummaryDamage[]>(`servidor/summary-damage/${startTime}`)
  }

  getGamesByProfile(namePlayer : String){
    return this.profile.getAccount(namePlayer).pipe(
      switchMap(()=> this.getLastMatch())
    )
  }

}
