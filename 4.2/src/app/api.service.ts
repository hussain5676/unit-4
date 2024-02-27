import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getPlayersDetails() {
    return this.http.get('http://localhost:3000/getPlayerDetails');
  }
  public getMoreRuns() {
    return this.http.get('http://localhost:3000/moreRuns');
  }
  public getLeastBalls() {
    return this.http.get('http://localhost:3000/leastBalls');
  }
  public getHighestSixes() {
    return this.http.get('http://localhost:3000/highestSixes');
  }
  public getHighestToLowestRuns() {
    return this.http.get('http://localhost:3000/playersFromHighestToLeastRuns');
  }
  public getHighestBattingStrike() {
    return this.http.get('http://localhost:3000/playerHighestBattingStrike');
  }
  public deletePlayer(id: string) {
    return this.http.delete(`http://localhost:3000/delete/:${id}`);
  }
  public registerPlayer(body: any) {
    return this.http.post('http://localhost:3000/insertPlayer', body);
  }
  public updatePlayerApi(body: any, id: any) {
    return this.http.patch(`http://localhost:3000/update/:${id}`, body);
  }
}
