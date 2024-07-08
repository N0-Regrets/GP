import {Component, Inject, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

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

  constructor(private http: HttpClient, private route: ActivatedRoute, @Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<TeacherAddAnnouncementComponent>) {
  }

  ngOnInit(): void {
    this.getSubjects()
  }

  classes: any[] = [];
  subjects: any[] = [];
  currentSubjectIndex: any = -1;
  currentClassId: any = -1;

  getSubjects() {

    this.http.get('http://ourschool.somee.com/api/Teacher/GetTeacherSubjects/' + this.data.teacherId).subscribe(
      (response: any) => {
        this.subjects = response;
        console.log(response)
      }
    );
  }

  getClasses() {

    console.log(this.currentSubjectIndex)
    this.http.get('http://ourschool.somee.com/GetTeacherClassesBasedOnSubjectAsync',
      {
        params: {
          teacherId: this.data.teacherId,
          subjectId: this.subjects[this.currentSubjectIndex].subject.id
        }
      }).subscribe(
      (response: any) => {
        console.log(response)
        this.classes = response;

      }
    );
  }




  onPost(form: any) {

    console.log(form.value)
    console.log(this.subjects[this.currentSubjectIndex].subject.name)
    console.log([form.value.class])
    this.http.post('http://ourschool.somee.com/api/TeacherCreateAnnouncement',
      {
        title: form.value.title,
        message: form.value.message,
        classIds: [form.value.class],
        subjects: this.subjects[this.currentSubjectIndex].subject.name

      }).subscribe(


    );
    setTimeout(() => {
      this.dialogRef.close();
      window.location.reload();
    }, 3000);

  }

}
