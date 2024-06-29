import {Component} from '@angular/core';
import {AdminNavigationBarComponent} from "../../../admin/admin-navigation-bar/admin-navigation-bar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {TeacherNavigationBarComponent} from "../../teacher-navigation-bar/teacher-navigation-bar.component";

@Component({
  selector: 'app-teacher-report-form',
  standalone: true,
  imports: [
    AdminNavigationBarComponent,
    FormsModule,
    NgForOf,
    ReactiveFormsModule,
    TeacherNavigationBarComponent
  ],
  templateUrl: './teacher-report-form.component.html',
  styleUrl: './teacher-report-form.component.css'
})
export class TeacherReportFormComponent {

}
