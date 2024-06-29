import {Component, OnInit} from '@angular/core';
import {TeacherNavigationBarComponent} from "../teacher-navigation-bar/teacher-navigation-bar.component";
import {HttpClient} from "@angular/common/http";
import {SearchService} from "../../services/search.service";
import {StudentsService} from "../../services/students.service";
import {ActivatedRoute} from "@angular/router";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-teacher-classes',
  standalone: true,
  imports: [
    TeacherNavigationBarComponent, NgFor
  ],
  templateUrl: './teacher-classes.component.html',
  styleUrl: './teacher-classes.component.css'
})
export class TeacherClassesComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getClasses();
    console.log(this.classes)
  }

  teacherId = this.route.snapshot.params["teacher-id"];
  classes: any[] = [];

  getClasses() {
    this.http.get('http://ourschool.somee.com/api/Class/GetTeacherClasses/' + this.teacherId).subscribe(
      (response: any) => {
        this.classes = response;
      }
    );
  }


}
