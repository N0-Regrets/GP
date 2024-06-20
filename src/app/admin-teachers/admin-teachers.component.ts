import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {searchService} from "../search.service";
import {TeacherModel} from "../models/teacher.model";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-admin-teachers',
  standalone: true,
  imports: [
    FormsModule, NgFor
  ],
  templateUrl: './admin-teachers.component.html',
  styleUrl: './admin-teachers.component.css'
})
export class AdminTeachersComponent implements OnInit {


  constructor(private http: HttpClient, private studentSearchService: searchService) {
  }


  ngOnInit() {
    this.getTeachers();
  }


  searchInput: string = "";
  teachers: TeacherModel[] = [];
  keys: string[] = [];
  filteredTeachers: TeacherModel[] = [];
  teacherToBeAdded: TeacherModel = new TeacherModel();


  getTeachers() {
    this.http.get('http://ourschool.somee.com/api/Teacher/GetAll').subscribe(
      (response: any) => {
        for (let responseKey in response) {
          this.teachers.push(response[responseKey]);
          this.keys.push(responseKey);
        }
      }
    );
    this.filteredTeachers = this.teachers;
  }

  onSubmit() {
    console.log(this.teacherToBeAdded)
    this.http.post('http://ourschool.somee.com/api/Teacher/Add', this.teacherToBeAdded).subscribe(() => {
      window.location.reload();
    });
  }

  search(): void {
    this.filteredTeachers = this.studentSearchService.searchStudents(
      this.teachers, this.searchInput, "", "" +
      "");
  }
}
