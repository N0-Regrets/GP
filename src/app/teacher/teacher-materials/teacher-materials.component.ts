import {Component} from '@angular/core';
import {TeacherNavigationBarComponent} from "../teacher-navigation-bar/teacher-navigation-bar.component";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-teacher-materials',
  standalone: true,
  imports: [
    TeacherNavigationBarComponent
  ],
  templateUrl: './teacher-materials.component.html',
  styleUrl: './teacher-materials.component.css'
})
export class TeacherMaterialsComponent {
  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  teacherId = this.route.snapshot.params["teacher-id"];
  subjectId = this.route.snapshot.params["subject-id"];
  levelId = this.route.snapshot.params["level-id"];

}
