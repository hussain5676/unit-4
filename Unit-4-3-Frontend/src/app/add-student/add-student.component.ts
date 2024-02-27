import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  response: any = [];
  constructor(private apiService: ApiService, private routes: Router) {}

  ngOnInit(): void {}

  addStudent(body: any) {
    this.response = this.apiService
      .addStudent(body)
      .subscribe((response: any) => {
        this.response = response?.response;
        console.log('add', this.response);
      });
  }
  Register(
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
    this.addStudent(body);
    this.detailsPage();
  }
  detailsPage() {
    this.routes.navigate(['/get-details']);
  }

  getDelete(name: string) {
    this.apiService.deleteStudent(name).subscribe((response: any) => {
      this.response = response?.response;
      console.log('get-details', response);
    });
  }
  deleteUser(name: string) {
    this.getDelete(name);
    window.location.reload();
  }
}
