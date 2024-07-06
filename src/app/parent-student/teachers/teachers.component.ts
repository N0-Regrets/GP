import {Component, OnInit} from '@angular/core';
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {NgFor} from "@angular/common";
import {ChatbotComponent} from "../../chatbot/chatbot.component";

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [
    NavigationBarComponent, NgFor, ChatbotComponent
  ],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getTeachers();
  }


  teachers: any[] = [];
  studentId = this.route.snapshot.params["student-id"];

  getTeachers() {
    this.http.get('http://ourschool.somee.com/api/Teacher/GetTeachersOfStudent/' + this.studentId).subscribe(
      (response: any) => {
        this.teachers = response;
      }
    );
  }

}
