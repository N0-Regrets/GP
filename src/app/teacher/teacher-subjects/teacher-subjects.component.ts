import {Component, OnInit} from '@angular/core';
import {TeacherNavigationBarComponent} from "../teacher-navigation-bar/teacher-navigation-bar.component";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {LevelModel} from "../../models/level.model";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-teacher-subjects',
  standalone: true,
  imports: [
    TeacherNavigationBarComponent,
    FormsModule,
    NgForOf
  ],
  templateUrl: './teacher-subjects.component.html',
  styleUrl: './teacher-subjects.component.css'
})
export class TeacherSubjectsComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getLevels();
    this.getSubjects(0);
    console.log(this.levels);
    console.log(this.subjects);
  }

  levels: LevelModel[] = [];
  subjects: any[] = [];
  currentLevelId = 0;

  teacherId = this.route.snapshot.params["teacher-id"];

  getLevels() {
    this.http.get('http://ourschool.somee.com/api/Teacher/GetTeacherLevel/' + this.teacherId).subscribe(
      (response: any) => {
        this.levels = response;
      }
    );
  }

  getSubjects(levelId: number) {
    this.http.get('http://ourschool.somee.com/api/Teacher/GetTeacherSubjectsInLevel/'
      + this.teacherId + "/" + levelId).subscribe(
      (response: any) => {
        this.subjects = response;
      }
    );
  }

  onSelectChange() {
    this.getSubjects(this.currentLevelId);
  }


}
