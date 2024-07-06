import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ClassModel} from "../../models/class.model";
import {HttpClient} from "@angular/common/http";
import {NgForOf, NgIf} from "@angular/common";
import {Form, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdminNavigationBarComponent} from "../admin-navigation-bar/admin-navigation-bar.component";

@Component({
  selector: 'app-admin-assign-teacher',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    AdminNavigationBarComponent
  ],
  templateUrl: './admin-assign-teachers.component.html',
  styleUrl: './admin-assign-teachers.component.css'
})
export class AdminAssignTeachersComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.getClassTeachersData();
  }

  ngOnInit(): void {

  }

  classId = this.route.snapshot.params["id"];
  classTeachersData: any[] = [];
  classInfo: ClassModel = new ClassModel();

  getClassTeachersData() {
    interface teacher {
      name: string;
      age: number;
    }

    this.http.get('http://ourschool.somee.com/api/Class/AssignTeachers/GetSubjectWithThierTeachers/' + this.classId).subscribe(
      (response: any) => {
        this.classTeachersData = response;
        console.log(this.classTeachersData);
      }
    );

    this.http.get('http://ourschool.somee.com/api/Class/GetClassInfoById/' + this.classId).subscribe(
      (response: any) => {
        this.classInfo = response;
        console.log(response)
      }
    );
  }


  onSave(form: any) {

    interface putObject {
      teacherId: number;
      subjectId: number;
    }

    let putObjects: putObject[] = [];


    Object.keys(form.value).forEach((key, index) => {
      putObjects.push({teacherId: form.value[key], subjectId: this.classTeachersData[index].subject.id})
    });
    this.http.put('http://ourschool.somee.com/api/Class/AssignTeachers/UpdateClassRecords/' + this.classId, putObjects).subscribe(
      (response: any) => {
        window.location.reload();
      }, error => {
        window.alert("Something went wrong please try again");
      }
    );
  }
}
