import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ReportsComponent} from "./reports/reports.component";
import {ChatbotComponent} from "../../chatbot/chatbot.component";

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [
    NgForOf,
    NavigationBarComponent,
    ChatbotComponent
  ],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css'
})
export class SubjectsComponent implements OnInit {


  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute, private dialog: MatDialog) {
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
    this.router.navigate(['/report/' + this.parentId + '/' + this.studentId + '/' + subjectId]);
  }
}
