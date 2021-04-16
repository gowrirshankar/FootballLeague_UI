import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { TeamDetail } from './model/teamdetail';
import { MatchplayedDetail } from './model/MatchplayedDetail';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  baseUrl = 'https://localhost:44330/api';
  getTeamsWithIdUrl = '/Football/GetTeamswithId';
  DeleteTeamsUrl = '/Football/DeleteTeams';

  private teamIdSource = new BehaviorSubject<number>(0);
  teamId$ = this.teamIdSource.asObservable();

  private matchIdSource = new BehaviorSubject<number>(0);
  matchId$ = this.matchIdSource.asObservable();

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  sendTeamId(teamId: number) {
    this.teamIdSource.next(teamId);
  }

  // tslint:disable-next-line:typedef
  sendMatchId(matchId: number) {
    this.matchIdSource.next(matchId);
  }

  getTeamsList(): Observable<any>{
    return this.http.get<any>(this.baseUrl + '/Football/GetTeams');
  }

  // tslint:disable-next-line:typedef
  getTeamsWithId(teamId: any): Observable<any>  {
    return this.http.get<any>(this.baseUrl + '/Football/GetTeamswithId' + '?id=' + teamId);
  }

  addTeamDetails(val: any): Observable<TeamDetail> {
    const  httpOptions = {
                          headers: new HttpHeaders({
                            'Content-Type': 'application/json'
                          })
                        };
    const value = this.http.post<TeamDetail>(this.baseUrl + '/Football/AddTeams', val, httpOptions);
    return value;
  }

  updateTeamDetails(val: any): Observable<TeamDetail> {
    const  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const value = this.http.put<TeamDetail>(this.baseUrl + '/Football/UpdateTeams', val, httpOptions);
    return value;
  }

  // tslint:disable-next-line:typedef
  deleteTeamDetails(teamId) {
    // return this.http.delete<any>( `${this.baseUrl}${this.DeleteTeamsUrl}?teamId=${teamId}`);
    return this.http.delete(this.baseUrl + '/Football/DeleteTeams' + '?teamId=' + teamId);
  }

  // Matches Played

  getPlayedMatchList(): Observable<any>{
    return this.http.get<any>(this.baseUrl + '/PlayedMatch/GetPlayedMatches');
  }

  getPlayedMatchesWithId(matchId: any): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/PlayedMatch/GetPlayedMatchesWithId' + '?id=' + matchId);
  }

  addPlayedMatchDetails(val: any): Observable<MatchplayedDetail> {
    const  httpOptions = {
                          headers: new HttpHeaders({
                            'Content-Type': 'application/json'
                          })
                        };
    const value = this.http.post<MatchplayedDetail>(this.baseUrl + '/PlayedMatch/AddPlayedMatch', val, httpOptions);
    return value;
  }

  updatePlayedMatchDetails(val: any): Observable<MatchplayedDetail> {
    const  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const value = this.http.put<MatchplayedDetail>(this.baseUrl + '/PlayedMatch/UpdatePlayedMatches', val, httpOptions);
    return value;
  }

  // tslint:disable-next-line:typedef
  deletePlayedMatches(matchId) {
    // return this.http.delete<any>( `${this.baseUrl}${this.DeleteTeamsUrl}?teamId=${teamId}`);
    return this.http.delete(this.baseUrl + '/PlayedMatch/DeletePlayedMatches' + '?matchId=' + matchId);
  }

}
