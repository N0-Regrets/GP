import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {SchoolDataService} from "../../services/school-data.service";
import {SearchService} from "../../services/search.service";
import {ActivatedRoute} from "@angular/router";
import {NgClass, NgForOf} from "@angular/common";
import {ChatbotComponent} from "../../chatbot/chatbot.component";
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgClass,
    ChatbotComponent,
    NavigationBarComponent
  ],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})
export class AttendanceComponent implements OnInit {

  constructor(private http: HttpClient, private schoolDataService: SchoolDataService,
              private studentSearchService: SearchService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getAttendanceInfo()
  }

  studentId = this.route.snapshot.params["student-id"];
  attendanceInfo: any;

  getAttendanceInfo() {

    this.http.get('http://ourschool.somee.com/api/Attendance/GetStudenceAttendanceReport/' + this.studentId).subscribe(
      (response: any) => {

        for (let element of response.attendance) {
          if (element.attendanceType == 1) {
            element.attendanceType = "Absent";
          }
          if (element.attendanceType == 2) {
            element.attendanceType = "Present";
          }
          if (element.attendanceType == 3) {
            element.attendanceType = "Excused Absent";
          }
        }

        this.attendanceInfo = response;
        this.studentId;
        console.log(response);
      }
    );
  }


}
