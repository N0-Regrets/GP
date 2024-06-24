import { Component } from '@angular/core';
import {TeacherNavigationBarComponent} from "../teacher-navigation-bar/teacher-navigation-bar.component";

@Component({
  selector: 'app-teacher-profile',
  standalone: true,
  imports: [
        TeacherNavigationBarComponent
  ],
  templateUrl: './teacher-profile.component.html',
  styleUrl: './teacher-profile.component.css'
})
export class TeacherProfileComponent {

}
