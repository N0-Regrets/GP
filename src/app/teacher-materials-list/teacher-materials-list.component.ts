import {Component, Input, OnInit, Output} from '@angular/core';
import {TeacherNavigationBarComponent} from "../teacher/teacher-navigation-bar/teacher-navigation-bar.component";
import {AdminNavigationBarComponent} from "../admin/admin-navigation-bar/admin-navigation-bar.component";
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {NgForOf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TeacherUploadMaterialsComponent} from "./teacher-upload-materials/teacher-upload-materials.component";


@Component({
  selector: 'app-teacher-materials-list',
  standalone: true,
  imports: [
    TeacherNavigationBarComponent,
    AdminNavigationBarComponent,
    NgForOf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './teacher-materials-list.component.html',
  styleUrl: './teacher-materials-list.component.css'
})
export class TeacherMaterialsListComponent implements OnInit {


  constructor(private http: HttpClient, private route: ActivatedRoute, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getClasses();
    this.getAllFiles();
  }

  teacherId = this.route.snapshot.params["teacher-id"];
  subjectId = this.route.snapshot.params["subject-id"];
  levelId = this.route.snapshot.params["level-id"];
  materialType = this.route.snapshot.params["material-type"];
  classes: any[] = [];
  files: any[] = [];
  currentClassId: number = -1;

  getClasses() {
    this.http.get('http://ourschool.somee.com/api/Teacher/GetTeacherClassesByLevelSubject/'
      + this.teacherId, {params: {Levelid: this.levelId, subjectid: this.subjectId}}).subscribe(
      (response: any) => {
        this.classes = response;
      }
    );
  }

  getAllFiles() {
    this.http.get('http://ourschool.somee.com/api/Material/GetMaterialForTeacher/'
      + this.materialType, {
      params: {
        Levelid: this.levelId,
        subjectid: this.subjectId,
        teacherid: this.teacherId
      }
    }).subscribe(
      (response: any) => {
        this.files = response;
      }
    );
  }

  getClassFiles() {
    this.http.get('http://ourschool.somee.com/api/Material/GetMaterialForTeacherInClass/'
      + this.materialType, {
      params: {
        Levelid: this.levelId,
        subjectid: this.subjectId,
        teacherid: this.teacherId,
        classid: this.currentClassId,
      }
    }).subscribe(
      (response: any) => {
        this.files = response;
      }
    );
  }

  onUpload() {
    this.dialog.open(TeacherUploadMaterialsComponent, {
      data: {
        teacherId: this.teacherId,
        subjectId: this.subjectId,
        levelId: this.levelId,
        materialType: this.materialType,
        classes: this.classes
      }
    });
  }

  onSelectChange() {
    if (this.currentClassId == -1) {
      this.getAllFiles();
    } else {
      this.getClassFiles()
    }
  }

  downloadFile(fileId: any) {
    this.http.get('http://ourschool.somee.com/api/Material/DownloadMaterial/' + fileId, {}).subscribe();
  }
}
