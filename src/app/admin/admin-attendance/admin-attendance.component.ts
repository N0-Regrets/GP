import {Component, OnInit} from '@angular/core';
import {AdminNavigationBarComponent} from "../admin-navigation-bar/admin-navigation-bar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {StudentsService} from "../../services/students.service";
import {HttpClient} from "@angular/common/http";
import {SearchService} from "../../services/search.service";
import {StudentModel} from "../../models/student.model";

@Component({
  selector: 'app-admin-attendance',
  standalone: true,
  imports: [
    AdminNavigationBarComponent,
    FormsModule,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './admin-attendance.component.html',
  styleUrl: './admin-attendance.component.css'
})
export class AdminAttendanceComponent implements OnInit {

  constructor(private http: HttpClient, private searchService: SearchService,
              private studentService: StudentsService) {
  }

  ngOnInit(): void {
    this.getAttendanceInfo();
  }

  students: StudentModel[] = this.studentService.getStudents();
  filteredStudents: StudentModel[] = this.students;
  attendanceInfo: any = [];
  searchInput: string = "";


  getAttendanceInfo() {
    for (let student of this.students) {
      this.http.get('http://ourschool.somee.com/api/Attendance/GetStudenceAttendanceReport/' + student.id).subscribe(
        (response: any) => {
          this.attendanceInfo.push(response);
        }
      );
    }
    console.log(this.students);

  }

  search(): void {
    this.filteredStudents = this.searchService.search(
      this.students, this.searchInput);
  }

  onRemove(studentId: any) {

    this.http.delete('http://ourschool.somee.com/api/Attendance/RemoveAbsenceWarn/' + studentId).subscribe(
      () => {
        window.location.reload();
      }
    );
  }


  onSetThreshold(thresholdForm: any) {

    this.http.post('http://ourschool.somee.com/api/Attendance/AddLimitAbsentDays/'
      + thresholdForm.value.threshold, null).subscribe();
  }
}
