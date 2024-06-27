import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-teacher-upload-materials',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './teacher-upload-materials.component.html',
  styleUrl: './teacher-upload-materials.component.css'
})
export class TeacherUploadMaterialsComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  onUpload() {
    this.http.post('http://ourschool.somee.com/api/Teacher/GetTeacherClassesByLevelSubject/'
      + this.teacherId, {params: {Levelid: this.levelId, subjectid: this.subjectId}}).subscribe(
      (response: any) => {
        this.classes = response;
      }
    );
  }

  ngOnInit(): void {
    this.getClasses();
  }

  teacherId = this.route.snapshot.params["teacher-id"];
  subjectId = this.route.snapshot.params["subject-id"];
  levelId = this.route.snapshot.params["level-id"];
  classes: any[] = [];
  currentClassId: number = 0;

  getClasses() {
    console.log(this.teacherId);
    console.log(this.subjectId);
    console.log(this.levelId);
    this.http.get('http://ourschool.somee.com/api/Teacher/GetTeacherClassesByLevelSubject/'
      + this.teacherId, {params: {Levelid: this.levelId, subjectid: this.subjectId}}).subscribe(
      (response: any) => {
        this.classes = response;
      }
    );
  }

  onSubmit() {

  }
}
