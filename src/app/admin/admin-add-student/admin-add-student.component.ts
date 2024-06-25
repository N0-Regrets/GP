import {Component} from '@angular/core';
import {FormGroup, FormsModule} from "@angular/forms";
import {StudentModel} from "../../models/student.model";
import {ParentModel} from "../../models/parent.model";
import {HttpClient} from "@angular/common/http";
import {AdminNavigationBarComponent} from "../admin-navigation-bar/admin-navigation-bar.component";
import {NgForOf} from "@angular/common";
import {SchoolDataService} from "../../services/school-data.service";
import {LevelModel} from "../../models/level.model";
import {DepartmentModel} from "../../models/department.model";

@Component({
  selector: 'app-admin-add-student',
  standalone: true,
  imports: [
    FormsModule,
    AdminNavigationBarComponent,
    NgForOf
  ],
  templateUrl: './admin-add-student.component.html',
  styleUrl: './admin-add-student.component.css'
})
export class AdminAddStudentComponent {
  constructor(private http: HttpClient, private schoolDataService: SchoolDataService) {
  }

  student: StudentModel = new StudentModel();
  parent: ParentModel = new ParentModel();
  levels: LevelModel[] = this.schoolDataService.getLevels();
  departments: DepartmentModel[] = this.schoolDataService.getDepartments();


  onAddStudent() {
    this.http.post('http://ourschool.somee.com/api/Student/AddStudent', this.student).subscribe(() => {
    });
    this.http.post('http://ourschool.somee.com/api/Parent/AddParent', this.parent).subscribe(() => {
    });
    // window.location.reload();

  }
}
