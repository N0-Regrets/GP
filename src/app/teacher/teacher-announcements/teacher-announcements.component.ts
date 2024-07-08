import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {TeacherNavigationBarComponent} from "../teacher-navigation-bar/teacher-navigation-bar.component";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {
  TeacherUploadMaterialsComponent
} from "../teacher-materials-list/teacher-upload-materials/teacher-upload-materials.component";
import {AdminNavigationBarComponent} from "../../admin/admin-navigation-bar/admin-navigation-bar.component";
import {TeacherAddAnnouncementComponent} from "./teacher-add-announcement/teacher-add-announcement.component";

@Component({
  selector: 'app-teacher-announcements',
  standalone: true,
  imports: [
    NgForOf,
    TeacherNavigationBarComponent,
    AdminNavigationBarComponent
  ],
  templateUrl: './teacher-announcements.component.html',
  styleUrl: './teacher-announcements.component.css'
})
export class TeacherAnnouncementsComponent {

  announcements: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAnnouncements();
  }

  teacherId = this.route.snapshot.params["teacher-id"];

  getAnnouncements(): void {
    this.http.get('http://ourschool.somee.com/api/GetTeachersAnnouncements').subscribe(
      (response: any) => {
        this.announcements = [...response].reverse();
        console.log(this.announcements);
      }
    );
  }

  onAdd() {
    this.dialog.open(TeacherAddAnnouncementComponent, {
      data: {
        teacherId: this.teacherId,
      }
    });
  }

}
