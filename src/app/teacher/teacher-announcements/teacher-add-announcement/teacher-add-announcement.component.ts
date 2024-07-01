import {Component, Inject, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-teacher-add-announcement',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './teacher-add-announcement.component.html',
  styleUrl: './teacher-add-announcement.component.css'
})
export class TeacherAddAnnouncementComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.getClasses();
    this.getSubjects()
  }

  classes: any[] = [];
  subjects: any[] = [];

  getClasses() {

    this.http.get('http://ourschool.somee.com/api/Class/GetTeacherClasses/' + this.data.teacherId).subscribe(
      (response: any) => {
        this.classes = response;

      }
    );
  }

  getSubjects() {

    this.http.get('http://ourschool.somee.com/api/Teacher/GetTeacherSubjects/' + this.data.teacherId).subscribe(
      (response: any) => {
        this.subjects = response;
      }
    );
  }


  onPost(form: any) {

    console.log(form.value)
    this.http.post('http://ourschool.somee.com/api/SchoolPostAnnouncement',
      {
        title: form.value.title,
        message: form.value.message,
        classIds: [form.value.class],
        subjects: form.value.subject

      }).subscribe(
      () => {
        window.location.reload();
      }
    );

  }

}
