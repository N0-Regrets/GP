import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

import {SearchService} from "../../services/search.service";
import {AdminNavigationBarComponent} from "../../admin/admin-navigation-bar/admin-navigation-bar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {TeacherNavigationBarComponent} from "../teacher-navigation-bar/teacher-navigation-bar.component";
import {TeacherReportFormComponent} from "./teacher-report-form/teacher-report-form.component";
import {SubjectModel} from "../../models/subject.model";

@Component({
  selector: 'app-teacher-reports',
  standalone: true,
  imports: [
    AdminNavigationBarComponent,
    FormsModule,
    NgForOf,
    ReactiveFormsModule,
    TeacherNavigationBarComponent
  ],
  templateUrl: './teacher-reports.component.html',
  styleUrl: './teacher-reports.component.css'
})
export class TeacherReportsComponent implements OnInit {


  constructor(private http: HttpClient, private route: ActivatedRoute, private dialog: MatDialog,
              private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.getStudents();
    this.getSubjects();
  }

  subjects: SubjectModel[] = [];
  teacherId = this.route.snapshot.params["teacher-id"];

  classId = this.route.snapshot.params["class-id"];
  subjectId: any;
  students: any[] = [];
  filteredStudents: any[] = this.students;
  searchInput: string = "";

  getStudents() {

    this.http.get('http://ourschool.somee.com/api/Student/GetStudentsWithParentByClassID/'
      + this.classId).subscribe(
      (response: any) => {
        this.students = response;
      }
    );
    this.filteredStudents = this.students;
    console.log(this.students);
  }

  getSubjects() {

    this.http.get('http://ourschool.somee.com/api/Subject/GetSubjectsByClassTeacher/'
      + this.classId + '/' + this.teacherId).subscribe(
      (response: any) => {
        this.subjects = response;
        console.log(response)
      }
    );
  }

  search(): void {
    this.filteredStudents = this.students.filter(student =>
      (this.searchInput ? student.studentName.toLowerCase().includes(this.searchInput.toLowerCase()) : true)
    );
  }

  onSendReport(studentId: any) {

    this.dialog.open(TeacherReportFormComponent, {
      data: {
        teacherId: this.teacherId,
        subjectId: this.subjectId,
        studentId: studentId,
      }

    });
  }

}
