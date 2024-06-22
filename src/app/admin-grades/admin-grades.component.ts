import {Component} from '@angular/core';
import {LevelModel} from "../models/level.model";
import {DepartmentModel} from "../models/department.model";
import {HttpClient} from "@angular/common/http";
import {SchoolDataService} from "../services/school-data.service";
import {FormsModule} from "@angular/forms";
import {NgFor} from "@angular/common";
import {SubjectModel} from "../models/subject.model";
import {searchService} from "../services/search.service";
import {StudentModel} from "../models/student.model";
import {SubjectRecordModel} from "../models/subject-record.model";
import {AdminNavigationBarComponent} from "../admin-navigation-bar/admin-navigation-bar.component";

@Component({
  selector: 'app-admin-grades',
  standalone: true,
  imports: [
    FormsModule, NgFor, AdminNavigationBarComponent
  ],
  templateUrl: './admin-grades.component.html',
  styleUrl: './admin-grades.component.css'
})
export class AdminGradesComponent {


  constructor(private http: HttpClient, private schoolDataService: SchoolDataService, private studentSearchService: searchService) {
  }

  searchInput: string = "";
  levels: LevelModel[] = this.schoolDataService.getLevels();
  departments: DepartmentModel[] = this.schoolDataService.getDepartments();
  subjects: SubjectModel[] = [];
  studentsFinalGrade: any[] = [];
  students: StudentModel[] = [];
  filteredStudents: StudentModel[] = [];
  buttonClicked: boolean = false;


  getTable(form: any) {
    this.buttonClicked = true;
    this.filteredStudents = [];
    this.students = [];
    this.http.get('http://ourschool.somee.com/api/Grades/GetFinalDegrees/'
      + form.value.level + '/' + form.value.department).subscribe(
      (response: any) => {
        this.subjects = response.subjects;
        this.studentsFinalGrade = response.studentsFinalGrade;
        for (let i = 0; i < this.studentsFinalGrade.length; i++) {
          this.students.push(this.studentsFinalGrade[i].student);
        }
        this.filteredStudents = this.students;
      }
    );
  }

  search(): void {
    this.filteredStudents = this.studentSearchService.searchStudents(
      this.students, this.searchInput, "", "" +
      "");
  }

}
