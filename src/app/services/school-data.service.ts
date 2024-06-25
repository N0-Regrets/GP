import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LevelModel} from "../models/level.model";
import {DepartmentModel} from "../models/department.model";
import {TermModel} from "../models/term.model";
import {SubjectModel} from "../models/subject.model";


@Injectable({
  providedIn: 'root'
})
export class SchoolDataService {

  constructor(private http: HttpClient) {
  }

  getDepartments(): DepartmentModel[] {
    let departments: DepartmentModel[] = [];
    this.http.get('http://ourschool.somee.com/api/Department/GetAllDepartmentsForList').subscribe(
      (response: any) => {
        departments = response;
      }
    );
    return departments;
  }

  getLevels(): LevelModel[] {
    let levels: LevelModel[] = [];
    this.http.get('http://ourschool.somee.com/api/Level/GetAllLevelsForList').subscribe(
      (response: any) => {
        levels = response;
      }
    );
    return levels;
  }

  getTerms(): TermModel[] {
    let terms: TermModel[] = [];
    this.http.get('http://ourschool.somee.com/api/Term/GetAllTermsForList').subscribe(
      (response: any) => {
        terms = response;
      }
    );
    return terms;
  }

  getClasses(): SubjectModel[] {
    let classes: SubjectModel[] = [];
    this.http.get('http://ourschool.somee.com/api/Class/GetAllClasses').subscribe(
      (response: any) => {
        classes = response;
      }
    );
    return classes;
  }

  getSubjects(): SubjectModel[] {
    let subjects: SubjectModel[] = [];
    this.http.get('http://ourschool.somee.com/api/Subject/GetAll').subscribe(
      (response: any) => {
        subjects = response;
      }
    );
    return subjects;
  }

}
