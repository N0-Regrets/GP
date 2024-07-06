import {Component, OnInit} from '@angular/core';
import {AdminNavigationBarComponent} from "../admin-navigation-bar/admin-navigation-bar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {ClassModel} from "../../models/class.model";
import {LevelModel} from "../../models/level.model";
import {DepartmentModel} from "../../models/department.model";
import {HttpClient} from "@angular/common/http";
import {SchoolDataService} from "../../services/school-data.service";
import {SearchService} from "../../services/search.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-classes',
  standalone: true,
  imports: [
    AdminNavigationBarComponent,
    FormsModule,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './admin-classes.component.html',
  styleUrl: './admin-classes.component.css'
})
export class AdminClassesComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private schoolDataService: SchoolDataService,) {
  }

  ngOnInit(): void {
    this.getClasses();
  }

  searchInput: string = "";
  classes: ClassModel[] = [];
  filteredClasses: ClassModel[] = [];
  levels: LevelModel[] = this.schoolDataService.getLevels();
  departments: DepartmentModel[] = this.schoolDataService.getDepartments();

  getClasses() {
    this.http.get('http://ourschool.somee.com/api/Class/GetAllClasses').subscribe(
      (response: any) => {
        this.classes = response;
        this.filteredClasses = this.classes;
      }
    );

  }

  onSearch() {
    this.filteredClasses = this.classes.filter(element =>
      this.searchInput ? element.number?.toString() === this.searchInput : true);
  }

  onDelete(id: any) {
    const userConfirmed = window.confirm('Are you sure you want to delete this class?');
    if (userConfirmed) {
      this.http.delete('http://ourschool.somee.com/api/Class/DeleteClass/' + id).subscribe(() => {
        window.location.reload();
      });
    }

  }

  onAddClass(form: any) {
    interface Class {
      number: number;
      levelId: number;
      departmentId: number;
      numOfStudent: number;
    }

    let classToBeAdded: Class = {
      number: form.value.number,
      levelId: form.value.level,
      departmentId: form.value.department,
      numOfStudent: form.value.numberOfStudents,
    }
    console.log(classToBeAdded);

    this.http.post('http://ourschool.somee.com/api/Class/AddClass', classToBeAdded).subscribe(() => {
      window.location.reload();
      },
      error => {
        window.alert("Something went wrong please try again later.")
      }
    );
  }

  onAssignTeacher(id: any) {
    console.log(id);
    this.router.navigate(["/../admin/assign-teachers", id]);
  }

}
