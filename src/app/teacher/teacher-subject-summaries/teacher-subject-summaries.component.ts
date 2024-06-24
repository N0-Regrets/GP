import { Component } from '@angular/core';
import {TeacherNavigationBarComponent} from "../teacher-navigation-bar/teacher-navigation-bar.component";


@Component({
  selector: 'app-teacher-subject-summaries',
  standalone: true,
  imports: [
    TeacherNavigationBarComponent
  ],
  templateUrl: './teacher-subject-summaries.component.html',
  styleUrl: './teacher-subject-summaries.component.css'
})
export class TeacherSubjectSummariesComponent {

}
