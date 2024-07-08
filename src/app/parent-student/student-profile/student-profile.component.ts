import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {ActivatedRoute} from "@angular/router";
import {ChatbotComponent} from "../../chatbot/chatbot.component";
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [
    ChatbotComponent,
    NavigationBarComponent
  ],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getStudent()
  }

  studentId = this.route.snapshot.params["student-id"];
  student: any;

  getStudent() {

    this.http.get('http://ourschool.somee.com/api/Student/GetStudentProfile/' + this.studentId).subscribe(
      (response: any) => {
        console.log(response);

        this.student = response;
      }
    );
  }


}
