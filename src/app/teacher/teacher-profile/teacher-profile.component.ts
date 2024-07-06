import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {ChatbotComponent} from "../../chatbot/chatbot.component";
import {NavigationBarComponent} from "../../parent-student/navigation-bar/navigation-bar.component";
import {TeacherNavigationBarComponent} from "../teacher-navigation-bar/teacher-navigation-bar.component";

@Component({
  selector: 'app-teacher-profile',
  standalone: true,
  imports: [
    ChatbotComponent,
    NavigationBarComponent,
    TeacherNavigationBarComponent
  ],
  templateUrl: './teacher-profile.component.html',
  styleUrl: './teacher-profile.component.css'
})
export class TeacherProfileComponent implements OnInit {


  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getTeacher()
  }

  teacherId = this.route.snapshot.params["teacher-id"];
  teacher: any;

  getTeacher() {

    this.http.get('http://ourschool.somee.com/api/Teacher/GetById/' + this.teacherId).subscribe(
      (response: any) => {
        this.teacher = response;
      }
    );
  }

}
