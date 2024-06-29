import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {
  TeacherUploadMaterialsComponent
} from "../teacher-materials-list/teacher-upload-materials/teacher-upload-materials.component";
import {StudentModel} from "../../models/student.model";
import {StudentsService} from "../../services/students.service";
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-teacher-reports',
  standalone: true,
  imports: [],
  templateUrl: './teacher-reports.component.html',
  styleUrl: './teacher-reports.component.css'
})
export class TeacherReportsComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute, private dialog: MatDialog,
              private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.getStudents();
    console.log(this.students)
  }

  teacherId = this.route.snapshot.params["teacher-id"];
  subjectId = this.route.snapshot.params["subject-id"];
  classId = this.route.snapshot.params["class-id"];

  students: any[] = [];
  filteredStudents: any[] = this.students;
  searchInput: string = "";

  getStudents() {
    this.http.get('http://ourschool.somee.com/api/Student/GetStudentsWithParentByClassID/'
      + this.classId).subscribe(
      (response: any) => {
        this.students = response;
      }
    );
    this.filteredStudents = this.students;
  }

  search(): void {
    this.filteredStudents = this.searchService.search(
      this.students, this.searchInput);
  }

  onSendReport() {
    this.dialog.open(TeacherUploadMaterialsComponent, {
      data: {
        // teacherId: this.teacherId,
        // subjectId: this.subjectId,
        // levelId: this.levelId,
        // materialType: this.materialType,
        // classes: this.classes
      }
    });
  }

}
