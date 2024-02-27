import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-show-all-details',
  templateUrl: './show-all-details.component.html',
  styleUrls: ['./show-all-details.component.css'],
})
// export class ShowAllDetailsComponent {

// }
export class ShowAllDetailsComponent implements OnInit {
  data: any = [];

  constructor(private dataService: ApiService) {}

  ngOnInit() {
    this.getElectivesData();
  }
  getElectivesData() {
    this.dataService.getAllElectivesData().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  findStudent(body: any) {
    this.dataService.findStudent(body).subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  deleteStudent(data: string) {
    this.dataService.deleteStudent(data).subscribe((response: any) => {
      this.data = response?.response;
    });
  }
}
