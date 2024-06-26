import {Component} from '@angular/core';
import {TeacherNavigationBarComponent} from "../teacher/teacher-navigation-bar/teacher-navigation-bar.component";

@Component({
  selector: 'app-display-subjects',
  standalone: true,
  imports: [
    TeacherNavigationBarComponent
  ],
  templateUrl: './display-subjects.component.html',
  styleUrl: './display-subjects.component.css'
})
export class DisplaySubjectsComponent {

}
