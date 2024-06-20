import {Component} from '@angular/core';
import {FormGroup, FormsModule} from "@angular/forms";
import {StudentModel} from "../models/student.model";
import {ParentModel} from "../models/parent.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-admin-add-student',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './admin-add-student.component.html',
  styleUrl: './admin-add-student.component.css'
})
export class AdminAddStudentComponent {
  constructor(private http: HttpClient) {
  }

  student: StudentModel = new StudentModel();
  parent: ParentModel = new ParentModel();


  onAddStudent() {
    console.log(this.student);
    this.http.post('http://ourschool.somee.com/api/AddStudent', this.student).subscribe(() => {
    });

    // this.http.post('http://ourschool.somee.com/api/AddParent', this.parent).subscribe(() => {
    // });
  }
}
