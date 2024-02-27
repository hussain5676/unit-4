import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ShowAllDetailsComponent } from './show-all-details/show-all-details.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  { path: '', redirectTo: 'get-details', pathMatch: 'full' },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'get-details', component: ShowAllDetailsComponent },
  { path: 'update-electives-details', component: UpdateStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
