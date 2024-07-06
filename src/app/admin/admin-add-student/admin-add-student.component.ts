import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {StudentModel} from "../../models/student.model";
import {ParentModel} from "../../models/parent.model";
import {HttpClient} from "@angular/common/http";
import {AdminNavigationBarComponent} from "../admin-navigation-bar/admin-navigation-bar.component";
import {NgForOf, NgIf} from "@angular/common";
import {SchoolDataService} from "../../services/school-data.service";
import {LevelModel} from "../../models/level.model";
import {DepartmentModel} from "../../models/department.model";
import {forkJoin} from 'rxjs';
import {ValidationService} from "../../services/validation.service";
import {MatError} from "@angular/material/form-field";


@Component({
  selector: 'app-admin-add-student',
  standalone: true,
  imports: [
    FormsModule,
    AdminNavigationBarComponent,
    NgForOf,
    MatError,
    NgIf
  ],
  templateUrl: './admin-add-student.component.html',
  styleUrl: './admin-add-student.component.css'
})
export class AdminAddStudentComponent {
  constructor(private http: HttpClient, private schoolDataService: SchoolDataService,
              protected validation: ValidationService) {
  }

  student: StudentModel = new StudentModel();
  parent: ParentModel = new ParentModel();
  levels: LevelModel[] = this.schoolDataService.getLevels();
  departments: DepartmentModel[] = this.schoolDataService.getDepartments();


  onAddStudent() {
    window.alert("Student and parent were added successfully!");

    const addStudent$ = this.http.post('http://ourschool.somee.com/api/Student/AddStudent', this.student);
    const addParent$ = this.http.post('http://ourschool.somee.com/api/Parent/AddParent', this.parent);

    forkJoin([addStudent$, addParent$]).subscribe(
      () => {
        window.alert("Student and parent were added successfully!");
        window.location.reload();
      }
    );

  }
}
