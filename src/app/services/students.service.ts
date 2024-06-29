import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DepartmentModel} from "../models/department.model";
import {StudentModel} from "../models/student.model";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  constructor(private http: HttpClient) {
  }

  getAllStudents(): StudentModel[] {
    let students: StudentModel[] = [];
    this.http.get('http://ourschool.somee.com/api/Student/GetStudents').subscribe(
      (response: any) => {
        students = response;
      }
    );
    return students;
  }

  getClassStudents(classId: number): StudentModel[] {
    let students: StudentModel[] = [];
    this.http.get('http://ourschool.somee.com/api/Student/GetStudentsByClassId/' + classId).subscribe(
      (response: any) => {
        students = response;
      }
    );
    return students;
  }

}
