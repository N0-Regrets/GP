import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {NavigationBarComponent} from "../parent-student/navigation-bar/navigation-bar.component";
import {LevelModel} from "../models/level.model";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {TeacherReportFormComponent} from "../teacher/teacher-reports/teacher-report-form/teacher-report-form.component";
import {MatDialog} from "@angular/material/dialog";
import {ReportsComponent} from "./reports/reports.component";

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [
    NgForOf,
    NavigationBarComponent
  ],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css'
})
export class SubjectsComponent implements OnInit {


  constructor(private http: HttpClient, private route: ActivatedRoute, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getSubjects();
  }

  subjects: any[] = [];

  studentId = this.route.snapshot.params["student-id"];
  parentId = this.route.snapshot.params["parent-id"];

  getSubjects() {
    this.http.get('http://ourschool.somee.com/api/Subject/GetSubjectsByStudId/' + this.studentId).subscribe(
      (response: any) => {
        this.subjects = response;
      }
    );
  }


  protected readonly onclick = onclick;

  onClick(subjectId: number) {

    this.dialog.open(ReportsComponent, {
      data: {
        subjectId: subjectId,
        studentId: this.studentId,
      }
    });

    this.http.get('http://ourschool.somee.com/api/ProgressReport/GetReport/' + this.studentId + '/' + subjectId).subscribe(
      (response: any) => {
        console.log(response)
      }
    );
  }
}
