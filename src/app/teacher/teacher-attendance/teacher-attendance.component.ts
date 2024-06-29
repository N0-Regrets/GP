import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StudentsService} from "../../services/students.service";
import {StudentModel} from "../../models/student.model";
import {ActivatedRoute} from "@angular/router";
import {AdminNavigationBarComponent} from "../../admin/admin-navigation-bar/admin-navigation-bar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {SearchService} from "../../services/search.service";
import {TeacherNavigationBarComponent} from "../teacher-navigation-bar/teacher-navigation-bar.component";

@Component({
  selector: 'app-teacher-attendance',
  standalone: true,
  imports: [
    AdminNavigationBarComponent,
    FormsModule,
    NgForOf,
    ReactiveFormsModule,
    TeacherNavigationBarComponent
  ],
  templateUrl: './teacher-attendance.component.html',
  styleUrl: './teacher-attendance.component.css'
})
export class TeacherAttendanceComponent {

  constructor(private http: HttpClient, private studentService: StudentsService,
              private searchService: SearchService, private route: ActivatedRoute) {
  }


  classId = this.route.snapshot.params["class-id"];
  teacherId = this.route.snapshot.params["teacher-id"];
  students: StudentModel[] = this.studentService.getClassStudents(this.classId);
  filteredStudents: StudentModel[] = this.students;
  searchInput: string = "";
  attendanceStatuses: string[] = new Array(this.students.length).fill("2");


  search() {
    this.filteredStudents = this.searchService.search(
      this.students, this.searchInput);
  }

  onSave() {
    interface BodyModel {
      studentId: any
      attendanceType: any
    }

    let body: BodyModel[] = [];
    for (let i = 0; i < this.attendanceStatuses.length; i++) {
      body.push({studentId: this.students[i].id, attendanceType: +this.attendanceStatuses[i]});
    }

    this.http.post('http://ourschool.somee.com/api/Attendance/TakeAttendance/'
      + this.teacherId, body).subscribe(
      () => {
        window.location.reload();
      }
    );
  }
}
