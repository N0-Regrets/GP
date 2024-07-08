import { Routes } from '@angular/router';
import {AdminAddStudentComponent} from "./admin/admin-add-student/admin-add-student.component";
import {AdminStudentsComponent} from "./admin/admin-students/admin-students.component";
import {AdminSubjectsComponent} from "./admin/admin-subjects/admin-subjects.component";
import {AdminTeachersComponent} from "./admin/admin-teachers/admin-teachers.component";
import {AdminGradesComponent} from "./admin/admin-grades/admin-grades.component";
import {AdminParentsComponent} from "./admin/admin-parents/admin-parents.component";
import {AdminClassesComponent} from "./admin/admin-classes/admin-classes.component";
import {AdminAssignTeachersComponent} from "./admin/admin-assign-teachers/admin-assign-teachers.component";
import {TeacherSubjectsComponent} from "./teacher/teacher-subjects/teacher-subjects.component";
import {TeacherMaterialsListComponent} from "./teacher/teacher-materials-list/teacher-materials-list.component";
import {AdminAttendanceComponent} from "./admin/admin-attendance/admin-attendance.component";
import {TeacherClassesComponent} from "./teacher/teacher-classes/teacher-classes.component";
import {TeacherAttendanceComponent} from "./teacher/teacher-attendance/teacher-attendance.component";
import {TeacherReportsComponent} from "./teacher/teacher-reports/teacher-reports.component";
import {TeacherGradesComponent} from "./teacher/teacher-grades/teacher-grades.component";
import {AdminAnnouncementsComponent} from "./admin/admin-announcements/admin-announcements.component";
import {TeacherAnnouncementsComponent} from "./teacher/teacher-announcements/teacher-announcements.component";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {AttendanceComponent} from "./parent-student/attendance/attendance.component";
import {StudentProfileComponent} from "./parent-student/student-profile/student-profile.component";
import {AnnouncementsComponent} from "./parent-student/announcements/announcements.component";
import {GradesComponent} from "./parent-student/grades/grades.component";
import {SubjectsComponent} from "./parent-student/subjects/subjects.component";
import {TeachersComponent} from "./parent-student/teachers/teachers.component";
import {ChildrenComponent} from "./parent-student/children/children.component";
import {ReportsComponent} from "./parent-student/subjects/reports/reports.component";
import {AuthenticationGuardService} from "./services/authentication-guard.service";
import {TeacherProfileComponent} from "./teacher/teacher-profile/teacher-profile.component";
import {ChatComponent} from "./chat/chat.component";
import {MaterialsTypesComponent} from "./materials-types/materials-types.component";
import {MaterialsComponent} from "./parent-student/materials/materials.component";

export const routes: Routes = [

  //Parent-Student
  {path: 'attendance/:parent-id/:student-id', component: AttendanceComponent, title: "Attendance"},
  {path: 'profile/:parent-id/:student-id', component: StudentProfileComponent, title: "Profile"},
  {path: 'announcements/:parent-id/:student-id', component: AnnouncementsComponent, title: "announcements"},
  {path: 'grades/:parent-id/:student-id', component: GradesComponent, title: "Grades"},
  {path: 'reports/:parent-id/:student-id', component: SubjectsComponent, title: "Reports"},
  {path: 'report/:student-id/:parent-id/:subject-id', component: ReportsComponent, title: "Reports"},
  {path: 'teachers/:parent-id/:student-id', component: TeachersComponent, title: "Teachers"},
  {path: 'subjects/:parent-id/:student-id', component: SubjectsComponent, title: "Subjects"},
  {path: 'children/:parent-id', component: ChildrenComponent, title: "Children"},
  {path: 'chat/:parent-id/:student-id', component: ChatComponent, title: "Chat"},
  {path: 'materials/:parent-id/:student-id', component: SubjectsComponent, title: "Materials"},
  {path: 'materials/:parent-id/:student-id/:subject-id', component: MaterialsTypesComponent, title: "Materials"},
  {
    path: 'materials/:parent-id/:student-id/:subject-id/:material-id',
    component: MaterialsComponent,
    title: "Materials"
  },

  //Authentication
  {path: '', component: AuthenticationComponent, title: "Sign in", canActivate: [AuthenticationGuardService]},


  //Admin
  {path: 'admin/add-student', component: AdminAddStudentComponent, title: "Add Student"},
  {path: 'admin/view-students', component: AdminStudentsComponent, title: "Students Page"},
  {path: 'admin/subjects', component: AdminSubjectsComponent, title: "Subjects Page"},
  {path: 'admin/teachers', component: AdminTeachersComponent, title: "Teachers Page"},
  {path: 'admin/grades', component: AdminGradesComponent, title: "Grades Page"},
  {path: 'admin/parents', component: AdminParentsComponent, title: "Parents Page"},
  {path: 'admin/classes', component: AdminClassesComponent, title: "Classes Page"},
  {path: 'admin/assign-teachers/:id', component: AdminAssignTeachersComponent, title: "Assign Teacher"},
  {path: 'admin/attendance', component: AdminAttendanceComponent, title: "Attendance Page"},
  {path: 'admin/announcements', component: AdminAnnouncementsComponent, title: "Announcements"},

  //Teacher
  {path: 'teacher/subjects/:teacher-id', component: TeacherSubjectsComponent, title: "Subjects"},
  {path: 'teacher/profile/:teacher-id', component: TeacherProfileComponent, title: "Profile"},
  {
    path: 'teacher/materials/:teacher-id/:subject-id/:level-id',
    component: MaterialsTypesComponent,
    title: "Materials"
  },
  {
    path: 'teacher/materials/:teacher-id/:subject-id/:level-id/:material-type',
    component: TeacherMaterialsListComponent,
    title: "Materials List"
  },
  {path: 'teacher/classes/:teacher-id', component: TeacherClassesComponent, title: "Classes"},
  {
    path: 'teacher/classes/attendance/:teacher-id/:class-id',
    component: TeacherAttendanceComponent,
    title: "Attendance"
  },
  {path: 'teacher/classes/reports/:teacher-id/:class-id', component: TeacherReportsComponent, title: "Reports"},
  {path: 'teacher/classes/grades/:teacher-id/:class-id', component: TeacherGradesComponent, title: "Grades"},
  {path: 'teacher/announcements/:teacher-id', component: TeacherAnnouncementsComponent, title: "Announcements"},
  {path: 'teacher/chat/:teacher-id', component: ChatComponent, title: "Chat"},

];
