import {Component, OnInit} from '@angular/core';
import {AdminNavigationBarComponent} from "../../admin/admin-navigation-bar/admin-navigation-bar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {ChatbotComponent} from "../../chatbot/chatbot.component";
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";


@Component({
  selector: 'app-grades',
  standalone: true,
  imports: [
    AdminNavigationBarComponent,
    FormsModule,
    NgForOf,
    ReactiveFormsModule,
    ChatbotComponent,
    NavigationBarComponent
  ],
  templateUrl: './grades.component.html',
  styleUrl: './grades.component.css'
})
export class GradesComponent implements OnInit {


  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getGrades();
  }


  grades: any[] = [];
  studentId = this.route.snapshot.params["student-id"];


  getGrades() {
    this.http.get('http://ourschool.somee.com/api/Grades/GetStudentDegrees/' + this.studentId).subscribe(
      (response: any) => {
        console.log(response);
        this.grades = response;
      }
    );
  }

}
