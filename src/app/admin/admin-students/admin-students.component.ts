import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";



import {NgForOf} from "@angular/common";
import {SearchService} from "../../services/search.service";
import {FormsModule} from "@angular/forms";
import {AdminNavigationBarComponent} from "../admin-navigation-bar/admin-navigation-bar.component";
import {StudentModel} from "../../models/student.model";

@Component({
  selector: 'app-admin-students',
  standalone: true,
  imports: [NgForOf, FormsModule, AdminNavigationBarComponent],
  templateUrl: './admin-students.component.html',
  styleUrl: './admin-students.component.css'
})
export class AdminStudentsComponent implements OnInit {

  constructor(private http: HttpClient, private searchService: SearchService) {
  }

  ngOnInit() {
    this.getStudents();

  }


  searchInput: string = "";


  students: StudentModel[] = [];

  filteredStudents: StudentModel[] = [];


  getStudents() {
    this.http.get('http://ourschool.somee.com/api/Student/GetStudents').subscribe(
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

  onDelete(id: any) {
    this.http.delete('http://ourschool.somee.com/api/Student/DeleteStudent/' + id).subscribe(() => {
      window.location.reload();
    });
  }

}
