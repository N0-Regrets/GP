import {Component, OnInit} from '@angular/core';
import {AdminNavigationBarComponent} from "../../admin/admin-navigation-bar/admin-navigation-bar.component";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {StudentModel} from "../../models/student.model";
import {HttpClient} from "@angular/common/http";
import {SchoolDataService} from "../../services/school-data.service";
import {SearchService} from "../../services/search.service";
import {LevelModel} from "../../models/level.model";
import {DepartmentModel} from "../../models/department.model";
import {SubjectModel} from "../../models/subject.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-teacher-grades',
  standalone: true,
  imports: [
    AdminNavigationBarComponent,
    FormsModule,
    NgForOf
  ],
  templateUrl: './teacher-grades.component.html',
  styleUrl: './teacher-grades.component.css'
})
export class TeacherGradesComponent implements OnInit {
  constructor(private http: HttpClient, private schoolDataService: SchoolDataService,
              private studentSearchService: SearchService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getSubjects();
  }

  searchInput: string = "";
  subjects: SubjectModel[] = [];
  studentsGrades: any[] = [];
  students: StudentModel[] = [];
  filteredStudents: StudentModel[] = [];
  teacherId = this.route.snapshot.params["teacher-id"];

  classId = this.route.snapshot.params["class-id"];
  buttonClicked: boolean = false;
  subjectId: any;


  getSubjects() {

    this.http.get('http://ourschool.somee.com/api/Subject/GetSubjectsByClassTeacher/'
      + this.classId + '/' + this.teacherId).subscribe(
      (response: any) => {
        this.subjects = response;
      }
    );
  }

  getTable(form: any) {

    this.buttonClicked = true;
    this.filteredStudents = [];
    this.students = [];
    this.http.get('http://ourschool.somee.com/api/Grades/'
      + this.classId + '/' + form.value.subject).subscribe(
      (response: any) => {
        console.log(response);
        this.studentsGrades = response;

        for (let i = 0; i < this.studentsGrades.length; i++) {
          this.students.push(this.studentsGrades[i].student);
        }
        this.filteredStudents = this.students;
      }
    );
  }

  search(): void {
    this.filteredStudents = this.studentSearchService.search(
      this.students, this.searchInput);
  }

  onSave(studentIndex: any) {
    this.http.put('http://ourschool.somee.com/api/Grades/updateGrade/'
      + this.students[studentIndex].id + '/' + this.subjectId, {
        midterm: this.studentsGrades[studentIndex].grades.midterm,
        workYear: this.studentsGrades[studentIndex].grades.workYear
      }
    ).subscribe({});
  }

}
