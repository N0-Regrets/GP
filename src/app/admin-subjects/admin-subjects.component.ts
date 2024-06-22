import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Subject} from './subject.model';
import {HttpClient} from '@angular/common/http';
import {NgForOf} from "@angular/common";
import {SchoolDataService} from "../services/school-data.service";
import {searchService} from "../services/search.service";
import {LevelModel} from "../models/level.model";
import {TermModel} from "../models/term.model";
import {DepartmentModel} from "../models/department.model";
import {SubjectRecordModel} from "../models/subject-record.model";
import {AdminNavigationBarComponent} from "../admin-navigation-bar/admin-navigation-bar.component";
import {SubjectModel} from "../models/subject.model";

@Component({
  selector: 'app-admin-subjects',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    AdminNavigationBarComponent
  ],
  templateUrl: './admin-subjects.component.html',
  styleUrl: './admin-subjects.component.css'
})
export class AdminSubjectsComponent implements OnInit {

  constructor(private http: HttpClient, private schoolDataService: SchoolDataService) {
  }

  ngOnInit() {
    this.getSubjects();

  }

  subjectToBeAdded: SubjectModel = new SubjectModel();
  subjectRecordToBrAdded: SubjectRecordModel = new SubjectRecordModel();

  subjectsRecords: SubjectRecordModel[] = [];
  filteredSubjectRecords: SubjectRecordModel[] = [];
  keys: string[] = [];
  terms: TermModel[] = this.schoolDataService.getTerms();
  levels: LevelModel[] = this.schoolDataService.getLevels();
  departments: DepartmentModel[] = this.schoolDataService.getDepartments();


  onAdd() {
    this.http.post('http://ourschool.somee.com/api/Subject/Add', this.subjectToBeAdded).subscribe(() => {
    });

  }

  onDelete(index: number) {
    this.http.delete('https://graduation-project-c712f-default-rtdb.firebaseio.com/subjects/' + this.keys.at(index) + '.json').subscribe(() => {
      window.location.reload();
    });
  }


  getSubjects() {
    this.http.get('http://ourschool.somee.com//api/SubjectRecord').subscribe(
      (response: any) => {
        for (let responseKey in response) {
          this.subjectsRecords.push(response[responseKey]);
          this.keys.push(responseKey);
        }
      }
    );
  }


}
