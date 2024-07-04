import {Component, OnInit} from '@angular/core';
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [
    NavigationBarComponent
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
    this.http.get('http://ourschool.somee.com' + this.studentId).subscribe(
      (response: any) => {
        this.teachers = response;
      }
    );
  }

}
