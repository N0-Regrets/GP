import {Component, Inject} from '@angular/core';
import {AdminNavigationBarComponent} from "../../../admin/admin-navigation-bar/admin-navigation-bar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {TeacherNavigationBarComponent} from "../../teacher-navigation-bar/teacher-navigation-bar.component";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {EvaluationReportModel} from "../../../models/evaluation-report.model";

@Component({
  selector: 'app-teacher-report-form',
  standalone: true,
  imports: [
    AdminNavigationBarComponent,
    FormsModule,
    NgForOf,
    ReactiveFormsModule,
    TeacherNavigationBarComponent
  ],
  templateUrl: './teacher-report-form.component.html',
  styleUrl: './teacher-report-form.component.css'
})
export class TeacherReportFormComponent {

  constructor(private dialogRef: MatDialogRef<TeacherReportFormComponent>, private http: HttpClient, private route: ActivatedRoute,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  report: EvaluationReportModel = new EvaluationReportModel();


  onSubmit() {
    this.report.teacherId = this.data.teacherId;
    this.report.subjectId = this.data.subjectId;
    this.report.studentId = this.data.studentId;
    this.report.toNumber();
    this.http.post('http://ourschool.somee.com/api/ProgressReport/AddReport', this.report).subscribe(
      () => {
        this.dialogRef.close();
      }
    );

  }
}
