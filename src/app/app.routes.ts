import { Routes } from '@angular/router';
import {AdminAddStudentComponent} from "./admin-add-student/admin-add-student.component";
import {AdminStudentsComponent} from "./admin-students/admin-students.component";
import {AdminSubjectsComponent} from "./admin-subjects/admin-subjects.component";
import {AdminTeachersComponent} from "./admin-teachers/admin-teachers.component";
import {AdminGradesComponent} from "./admin-grades/admin-grades.component";

export const routes: Routes = [
  {path: 'admin/add-student', component: AdminAddStudentComponent},
  {path: 'admin/view-students', component: AdminStudentsComponent},
  {path: 'admin/subjects', component: AdminSubjectsComponent},
  {path: 'admin/teachers', component: AdminTeachersComponent},
  {path: 'admin/grades', component: AdminGradesComponent},
];
