import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ChatbotComponent} from "../../chatbot/chatbot.component";

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [
    NgForOf,
    NavigationBarComponent,
    ChatbotComponent,
    NgIf
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

  onClick(subjectId: number) {
    if (this.parentId != 'x') {
      this.router.navigate(['/report/' + this.parentId + '/' + this.studentId + '/' + subjectId]);
    } else {
      this.router.navigate(['/materials/' + this.parentId + '/' + this.studentId + '/' + subjectId]);

    }

  }
}
