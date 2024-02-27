import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-get-player-details',
  templateUrl: './get-player-details.component.html',
  styleUrls: ['./get-player-details.component.css'],
})
export class GetPlayerDetailsComponent {
  response: any = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllData();
  }
  getAllData() {
    this.apiService.getPlayersDetails().subscribe((response: any) => {
      this.response = response;
      console.log('getPlayersDetails', response);
    });
  }
  getMoreRuns() {
    this.apiService.getMoreRuns().subscribe((response: any) => {
      this.response = response?.response;
      console.log('get more runs', this.response);
    });
  }
  getLeastBalls() {
    this.apiService.getLeastBalls().subscribe((response: any) => {
      this.response = response?.response;
      console.log('get least balls', this.response);
    });
  }
  getHighestSixes() {
    this.apiService.getHighestSixes().subscribe((response: any) => {
      this.response = response?.response;
      console.log('get highest sixes', this.response);
    });
  }
  getHighestToLowestRuns() {
    this.apiService.getHighestToLowestRuns().subscribe((response: any) => {
      this.response = response?.response;
      console.log('get highest to lowest runs', this.response);
    });
  }
  getHighestBattingStrike() {
    this.apiService.getHighestBattingStrike().subscribe((response: any) => {
      this.response = response?.response;
      console.log('get highest batting strike', this.response);
    });
  }
  getDelete(deleteData: string) {
    this.apiService.deletePlayer(deleteData).subscribe((response: any) => {
      this.response = response?.response;
      console.log('getDelete', response);
    });
  }
  onOptionsSelected(value: string) {
    if (value === 'more-runs') {
      this.getMoreRuns();
    } else if (value === 'least-balls') {
      this.getLeastBalls();
    } else if (value === 'highest-sixes') {
      this.getHighestSixes();
    } else if (value === 'highest-to-least-runs') {
      this.getHighestToLowestRuns();
    } else if (value === 'highest-batting-strike') {
      this.getHighestBattingStrike();
    } else {
      this.getAllData();
    }
  }
  deleteUser(id: string) {
    this.getDelete(id);
    window.location.reload();
  }
}
