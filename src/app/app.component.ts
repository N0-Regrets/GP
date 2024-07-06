import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AdminSubjectsComponent} from "./admin/admin-subjects/admin-subjects.component";
import {AdminNavigationBarComponent} from "./admin/admin-navigation-bar/admin-navigation-bar.component";
import {AdminStudentsComponent} from "./admin/admin-students/admin-students.component";
import {AdminAddStudentComponent} from "./admin/admin-add-student/admin-add-student.component";
import {AdminTeachersComponent} from "./admin/admin-teachers/admin-teachers.component";
import {AdminGradesComponent} from "./admin/admin-grades/admin-grades.component";
import {ChatbotComponent} from "./chatbot/chatbot.component";
import {TeacherNavigationBarComponent} from "./teacher/teacher-navigation-bar/teacher-navigation-bar.component";
import {TeacherSubjectsComponent} from "./teacher/teacher-subjects/teacher-subjects.component";
import {TeacherMaterialsListComponent} from "./teacher/teacher-materials-list/teacher-materials-list.component";
import {TeacherReportsComponent} from "./teacher/teacher-reports/teacher-reports.component";
import {TeacherReportFormComponent} from "./teacher/teacher-reports/teacher-report-form/teacher-report-form.component";
import {
  AdminAddAnnouncementComponent
} from "./admin/admin-announcements/admin-add-announcement/admin-add-announcement.component";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {AttendanceComponent} from "./parent-student/attendance/attendance.component";
import {AuthenticationService} from "./services/authentication.service";
import {ChatComponent} from "./chat/chat.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: {ngSkipHydration: 'true'},
  imports: [CommonModule, RouterOutlet,
    AdminSubjectsComponent, AdminSubjectsComponent,
    AdminNavigationBarComponent, AdminStudentsComponent, AdminAddStudentComponent, AdminTeachersComponent,
    AdminGradesComponent, ChatbotComponent,
    TeacherNavigationBarComponent, HttpClientModule, TeacherSubjectsComponent, TeacherMaterialsListComponent, TeacherReportsComponent, TeacherReportFormComponent, AdminAddAnnouncementComponent, AuthenticationComponent, AttendanceComponent, ChatComponent]
})
export class AppComponent implements OnInit {
  constructor(private authentication: AuthenticationService,) {
  }

  ngOnInit(): void {

    this.authentication.automaticLogin();
  }
  title = 'GP';
}
