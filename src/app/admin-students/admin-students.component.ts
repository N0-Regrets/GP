import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";


import {BrowserModule} from "@angular/platform-browser";

import {NgForOf} from "@angular/common";
import {searchService} from "../services/search.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-admin-students',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './admin-students.component.html',
  styleUrl: './admin-students.component.css'
})
export class AdminStudentsComponent implements OnInit {

  constructor(private http: HttpClient, private studentSearchService: searchService) {
  }

  ngOnInit() {
    this.getStudents();

  }


  searchInput: string = "";


  students: any[] = [];
  keys: string[] = [];
  filteredStudents: any[] = [];


  getStudents() {
    this.http.get('http://ourschool.somee.com/api/Student/GetStudents').subscribe(
      (response: any) => {
        for (let responseKey in response) {
          this.students.push(response[responseKey]);
          this.keys.push(responseKey);
        }
      }
    );
    this.filteredStudents = this.students;
  }

  search(): void {
    this.filteredStudents = this.studentSearchService.searchStudents(
      this.students, this.searchInput, "", "" +
      "");
  }

}
