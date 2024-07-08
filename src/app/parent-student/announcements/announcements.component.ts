import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {
  TeacherAddAnnouncementComponent
} from "../../teacher/teacher-announcements/teacher-add-announcement/teacher-add-announcement.component";
import {NgForOf, NgIf} from "@angular/common";
import {TeacherNavigationBarComponent} from "../../teacher/teacher-navigation-bar/teacher-navigation-bar.component";
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {ChatbotComponent} from "../../chatbot/chatbot.component";

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [
    NgForOf,
    TeacherNavigationBarComponent, NgIf, NavigationBarComponent, ChatbotComponent
  ],
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.css'
})
export class AnnouncementsComponent implements OnInit {


  parentAnnouncements: any[] = [];
  childAnnouncements: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getParentAnnouncements();
    this.getChildAnnouncements();
  }


  studentId = this.route.snapshot.params["student-id"];
  parentId = this.route.snapshot.params["parent-id"];
  parentButton: boolean = false;
  childButton: boolean = true;

  getChildAnnouncements(): void {
    this.http.get('http://ourschool.somee.com/api/GetStudentsAnnouncements', {
      params: {id: this.studentId}
    }).subscribe(
      (response: any) => {
        this.childAnnouncements = [...response].reverse();
      }
    );
  }

  getParentAnnouncements(): void {
    this.http.get('http://ourschool.somee.com/api/GetParentssAnnouncements').subscribe(
      (response: any) => {
        this.parentAnnouncements = [...response].reverse();
      }
    );
  }

  change(num: number) {
    if (num === 1) {
      this.parentButton = true;
      this.childButton = false;
    } else {
      this.parentButton = false;
      this.childButton = true;
    }
    console.log(this.parentButton);
    console.log(this.childButton);
  }


}
