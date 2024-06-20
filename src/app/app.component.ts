import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavigationBarComponent} from "./navigation-bar/navigation-bar.component";
import {AnnouncementsComponent} from "./announcements/announcements.component";
import {SubjectsComponent} from "./subjects/subjects.component";
import {HttpClientModule} from '@angular/common/http';
import {importProvidersFrom} from '@angular/core';
import {AdminSubjectsComponent} from "./admin-subjects/admin-subjects.component";
import {AdminNavigationBarComponent} from "./admin-navigation-bar/admin-navigation-bar.component";
import {AdminStudentsComponent} from "./admin-students/admin-students.component";
import {AdminAddStudentComponent} from "./admin-add-student/admin-add-student.component";
import {AdminTeachersComponent} from "./admin-teachers/admin-teachers.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: {ngSkipHydration: 'true'},
  imports: [CommonModule, RouterOutlet, NavigationBarComponent,
    AnnouncementsComponent, SubjectsComponent, AdminSubjectsComponent, AdminSubjectsComponent, AdminNavigationBarComponent, AdminStudentsComponent, AdminAddStudentComponent, AdminTeachersComponent]
})
export class AppComponent {
  title = 'GP';
}
