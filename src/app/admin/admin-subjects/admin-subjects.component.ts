import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {NgForOf} from "@angular/common";
import {SchoolDataService} from "../../services/school-data.service";
import {LevelModel} from "../../models/level.model";
import {TermModel} from "../../models/term.model";
import {DepartmentModel} from "../../models/department.model";
import {SubjectRecordModel} from "../../models/subject-record.model";
import {AdminNavigationBarComponent} from "../admin-navigation-bar/admin-navigation-bar.component";
import {SubjectModel} from "../../models/subject.model";

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

  subjectsRecords: SubjectRecordModel[] = [];
  terms: TermModel[] = this.schoolDataService.getTerms();
  levels: LevelModel[] = this.schoolDataService.getLevels();
  departments: DepartmentModel[] = this.schoolDataService.getDepartments();
  subjects: SubjectModel[] = this.schoolDataService.getSubjects();

  getSubjects() {
    this.http.get('http://ourschool.somee.com//api/SubjectRecord').subscribe(
      (response: any) => {
        this.subjectsRecords = response;
      }
    );
  }

  onSelectingImage($event: Event) {
    const input = $event.target as HTMLInputElement | null;
    if (input && input.files && input.files.length > 0) {
      this.subjectToBeAdded.image = input.files[0];
    }
  }

  onAddSubject() {
    const formData = new FormData();
    formData.append('name', this.subjectToBeAdded.name);
    formData.append('image', this.subjectToBeAdded.image as File);
    this.http.post('http://ourschool.somee.com/api/Subject/Add', formData).subscribe(() => {
      window.location.reload();
    });
  }


  onConfigureSubject(form: any) {
    interface Record {
      subjectId: number;
      termId: number;
      departmentId: number;
      levelId: number;
    }

    let record: Record = {
      subjectId: form.value.subject,
      termId: form.value.term,
      departmentId: form.value.department,
      levelId: form.value.level,
    };


    this.http.post('http://ourschool.somee.com/api/SubjectRecord/Add', record).subscribe(() => {
      window.location.reload();
    });
  }

  onDelete(index: number) {
    const userConfirmed = window.confirm('Are you sure you want to delete this subject record?');
    if (userConfirmed) {
      this.http.delete('http://ourschool.somee.com/api/SubjectRecord/Delete/'
        + this.subjectsRecords[index].subLevlDeptTermId).subscribe(() => {
        window.location.reload();
      });
    }

  }


}
