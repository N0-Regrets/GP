import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavigationBarComponent} from "./navigation-bar/navigation-bar.component";
import {AnnouncementsComponent} from "./announcements/announcements.component";
import {SubjectsComponent} from "./subjects/subjects.component";
import {AdminSubjectsComponent} from "./admin/admin-subjects/admin-subjects.component";
import {AdminNavigationBarComponent} from "./admin/admin-navigation-bar/admin-navigation-bar.component";
import {AdminStudentsComponent} from "./admin/admin-students/admin-students.component";
import {AdminAddStudentComponent} from "./admin/admin-add-student/admin-add-student.component";
import {AdminTeachersComponent} from "./admin/admin-teachers/admin-teachers.component";
import {AdminGradesComponent} from "./admin/admin-grades/admin-grades.component";
import {ChatbotComponent} from "./teacher/chatbot/chatbot.component";
import {TeacherProfileComponent} from "./teacher/teacher-profile/teacher-profile.component";
import {TeacherSubjectComponent} from "./teacher/teacher-subject/teacher-subject.component";
import {
  TeacherSubjectSummariesComponent
} from "./teacher/teacher-subject-summaries/teacher-subject-summaries.component";
import {
  TeacherSubjectSummariesAddNewSummariesComponent
} from "./teacher/teacher-subject-summaries-add-new-summaries/teacher-subject-summaries-add-new-summaries.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: {ngSkipHydration: 'true'},
  imports: [CommonModule, RouterOutlet, NavigationBarComponent,
    AnnouncementsComponent, SubjectsComponent, AdminSubjectsComponent, AdminSubjectsComponent, AdminNavigationBarComponent, AdminStudentsComponent, AdminAddStudentComponent, AdminTeachersComponent, AdminGradesComponent, ChatbotComponent, TeacherProfileComponent, TeacherSubjectComponent, TeacherSubjectSummariesComponent, TeacherSubjectSummariesAddNewSummariesComponent]
})
export class AppComponent {
  title = 'GP';
}
