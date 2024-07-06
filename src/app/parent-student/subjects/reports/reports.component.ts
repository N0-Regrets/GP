import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NavigationBarComponent} from "../../navigation-bar/navigation-bar.component";
import {ChatbotComponent} from "../../../chatbot/chatbot.component";

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    FormsModule,
    NavigationBarComponent,
    ChatbotComponent
  ],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getReport();
  }

  studentId = this.route.snapshot.params["student-id"];
  subjectId = this.route.snapshot.params["subject-id"];
  subject = this.route.snapshot.params["subject-id"];

  report: any;

  getReport() {
    this.http.get('http://ourschool.somee.com/api/ProgressReport/GetReport/'
      + this.studentId + '/' + this.subjectId).subscribe(
      (response: any) => {
        this.report = response;
        console.log(this.report);
      }
    );
  }
}
