import {Component, Inject, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

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
export class TeacherUploadMaterialsComponent {


  constructor(private http: HttpClient, private route: ActivatedRoute,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }


  currentClassId: any;


  onSubmit() {
    this.http.post('http://ourschool.somee.com/api/Material/uploadMaterial/'
      + this.data.materialType, {
      Levelid: this.data.levelId,
      subjectid: this.data.subjectId,
      teacherid: this.data.teacherId,
      classid: this.data.currentClassId,

    }).subscribe();
  }
}
