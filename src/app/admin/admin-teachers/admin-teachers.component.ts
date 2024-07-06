import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {NgFor} from "@angular/common";
import {AdminNavigationBarComponent} from "../admin-navigation-bar/admin-navigation-bar.component";
import {SchoolDataService} from "../../services/school-data.service";
import {SubjectModel} from "../../models/subject.model";
import {TeacherModel} from "../../models/teacher.model";
import {SearchService} from "../../services/search.service";


@Component({
  selector: 'app-admin-teachers',
  standalone: true,
  imports: [
    FormsModule, NgFor, AdminNavigationBarComponent
  ],
  templateUrl: './admin-teachers.component.html',
  styleUrl: './admin-teachers.component.css'
})
export class AdminTeachersComponent implements OnInit {


  constructor(private http: HttpClient, private searchService: SearchService,
              private schoolDataService: SchoolDataService) {
  }


  ngOnInit() {
    this.getTeachers();
  }

  subjects: SubjectModel[] = this.schoolDataService.getSubjects();
  searchInput: string = "";
  teachers: TeacherModel[] = [];
  filteredTeachers: TeacherModel[] = [];
  teacherToBeAdded: TeacherModel = new TeacherModel();


  getTeachers() {
    this.http.get('http://ourschool.somee.com/api/Teacher/GetAll').subscribe(
      (response: any) => {
        this.teachers = response;
      }
    );
    this.filteredTeachers = this.teachers;
  }

  onAddTeacher() {
    console.log(this.teacherToBeAdded)
    this.http.post('http://ourschool.somee.com/api/Teacher/Add', this.teacherToBeAdded).subscribe(() => {
      window.location.reload();
    });
  }

  search(): void {
    this.filteredTeachers = this.searchService.search(
      this.teachers, this.searchInput);
  }

  onDelete(id: any) {
    const userConfirmed = window.confirm('Are you sure you want to delete this teacher?');
    if (userConfirmed) {
      this.http.delete('http://ourschool.somee.com/api/Teacher/Delete/'
        + id).subscribe(() => {
        window.location.reload();
      });
    }

  }
}
