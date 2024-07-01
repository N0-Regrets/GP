import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";



import {NgForOf} from "@angular/common";
import {SearchService} from "../../services/search.service";
import {FormsModule} from "@angular/forms";
import {AdminNavigationBarComponent} from "../admin-navigation-bar/admin-navigation-bar.component";
import {StudentModel} from "../../models/student.model";
import {StudentsService} from "../../services/students.service";

@Component({
  selector: 'app-admin-students',
  standalone: true,
  imports: [NgForOf, FormsModule, AdminNavigationBarComponent],
  templateUrl: './admin-students.component.html',
  styleUrl: './admin-students.component.css'
})
export class AdminStudentsComponent implements OnInit {

  constructor(private http: HttpClient, private searchService: SearchService,
              private studentService: StudentsService) {
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  students: StudentModel[] = this.studentService.getAllStudents();
  filteredStudents: StudentModel[] = this.students;
  searchInput: string = "";


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
