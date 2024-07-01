import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {log} from "node:util";
import {MatDialog} from "@angular/material/dialog";
import {
  TeacherUploadMaterialsComponent
} from "../../teacher/teacher-materials-list/teacher-upload-materials/teacher-upload-materials.component";
import {TeacherNavigationBarComponent} from "../../teacher/teacher-navigation-bar/teacher-navigation-bar.component";
import {NgFor} from "@angular/common";
import {AdminNavigationBarComponent} from "../admin-navigation-bar/admin-navigation-bar.component";
import {AdminAddAnnouncementComponent} from "./admin-add-announcement/admin-add-announcement.component";

@Component({
  selector: 'app-admin-announcements',
  standalone: true,
  imports: [
    NgFor,
    TeacherNavigationBarComponent,
    AdminNavigationBarComponent
  ],
  templateUrl: './admin-announcements.component.html',
  styleUrl: './admin-announcements.component.css'
})
export class AdminAnnouncementsComponent implements OnInit {


  announcements: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAnnouncements();
  }

  getAnnouncements(): void {
    this.http.get("http://ourschool.somee.com/GetAllAnnouncements").subscribe(
      (response: any) => {
        this.announcements = response;
        console.log(this.announcements);
      }
    );
  }

  onAdd() {
    this.dialog.open(AdminAddAnnouncementComponent);
  }
}
