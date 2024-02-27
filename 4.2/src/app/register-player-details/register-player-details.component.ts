import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-player-details',
  templateUrl: './register-player-details.component.html',
  styleUrls: ['./register-player-details.component.css'],
})
export class RegisterPlayerDetailsComponent {
  response: any = [];
  constructor(private apiService: ApiService, private routes: Router) {}

  ngOnInit(): void {}

  registerAPlayer(body: any) {
    this.response = this.apiService
      .registerPlayer(body)
      .subscribe((response: any) => {
        this.response = response?.response;
        console.log('registerPlayer', this.response);
      });
  }
  Register(
    name: string,
    scored_runs: string,
    played_balls: string,
    played_matches: string,
    scored_fours: string,
    scored_sixes: string,
    strike_rate: string
  ) {
    const body = {
      name: name,
      scored_runs: scored_runs,
      played_balls: played_balls,
      played_matches: played_matches,
      scored_fours: scored_fours,
      scored_sixes: scored_sixes,
      strike_rate: strike_rate,
    };
    this.registerAPlayer(body);
    this.detailsPage();
  }
  detailsPage() {
    this.routes.navigate(['/getDetails']);
  }
}
