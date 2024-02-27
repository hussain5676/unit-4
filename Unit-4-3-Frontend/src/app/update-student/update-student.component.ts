import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
})
export class UpdateStudentComponent {
  response: any = [];
  id: any;
  data: any;
  constructor(private apiService: ApiService, private routes: Router) {}

  ngOnInit(): void {}

  updateStudent(body: any, id: any) {
    this.apiService.updateApi(body).subscribe((response: any) => {
      this.response = response?.response;
      console.log('update player', this.response);
    });
  }
  Update(
    name: string,
    subject1: string,
    subject2: string,
    subject3: string,
    subject4: string,
    subject5: string
  ) {
    const body = {
      name: name,
      subject1: subject1,
      subject2: subject2,
      subject3: subject3,
      subject4: subject4,
      subject5: subject5,
    };
    this.updateStudent(body, this.id);
    this.detailsPage();
  }
  detailsPage() {
    this.routes.navigate(['/get-details']);
  }
}
