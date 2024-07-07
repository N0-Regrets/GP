import {Component, Inject, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {response} from "express";

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

  selectedFile: File | undefined;


  currentClassId: any;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.selectedFile = input.files[0];
    }
  }


  onSubmit() {
    const formData = new FormData();

    formData.append('SubjectId', this.data.subjectId);
    formData.append('TeacherId', this.data.teacherId);
    formData.append('Levelid', this.data.levelId);
    formData.append('MaterialClass', this.currentClassId);
    formData.append('material', this.selectedFile as File);
    formData.forEach((value, key) => {
      console.log({key, value});
    });

    this.data.materialType = +this.data.materialType;
    this.http.post('http://ourschool.somee.com/api/Material/uploadMaterial2/' +
      this.data.materialType, formData).subscribe(() => {
      console.log("hello")
      window.location.reload();
    });
  }
}
