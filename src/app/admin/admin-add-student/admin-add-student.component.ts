import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {HttpClient} from "@angular/common/http";
import {AdminNavigationBarComponent} from "../admin-navigation-bar/admin-navigation-bar.component";
import {NgForOf, NgIf} from "@angular/common";
import {SchoolDataService} from "../../services/school-data.service";
import {LevelModel} from "../../models/level.model";
import {DepartmentModel} from "../../models/department.model";
import {ValidationService} from "../../services/validation.service";
import {MatError} from "@angular/material/form-field";

interface User {
  parentName: string;
  parentGmailAddress: string;
  parentPhoneNumber: string;
  parentAddress: string;

  studentName: string;
  studentGmailAddress: string;
  studentReligion: string;
  studentBirthDay: string;
  studentAge: number | undefined;
  studentPhoneNumber: string;
  studentAddress: string;
  studentNationality: string;
  studentGender: string;
  studentLevelId: number | undefined;
  studentDepartmentId: number | undefined;
  studentClassId: number | undefined;
}
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


  user: User = {
    parentName: '',
    parentGmailAddress: '',
    parentPhoneNumber: '',
    parentAddress: '',
    studentName: '',
    studentGmailAddress: '',
    studentReligion: '',
    studentBirthDay: '',
    studentAge: undefined,
    studentPhoneNumber: '',
    studentAddress: '',
    studentNationality: '',
    studentGender: '',
    studentLevelId: undefined,
    studentDepartmentId: undefined,
    studentClassId: undefined
  };

  levels: LevelModel[] = this.schoolDataService.getLevels();
  departments: DepartmentModel[] = this.schoolDataService.getDepartments();


  onAddStudent() {
    console.log(this.user)
    this.http.post('http://ourschool.somee.com/AddParentAndStudent', this.user).subscribe(
      () => {
        window.alert("Student and parent were added successfully!");
        window.location.reload();
      }, error => {
        window.alert("Something went wrong, please try again.");
      }
    );
  }
}
