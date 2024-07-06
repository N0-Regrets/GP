import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {NgIf} from "@angular/common";
import {MatError} from "@angular/material/form-field";

@Component({
  selector: 'app-admin-add-announcement',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    MatError
  ],
  templateUrl: './admin-add-announcement.component.html',
  styleUrl: './admin-add-announcement.component.css'
})
export class AdminAddAnnouncementComponent {
  constructor(private http: HttpClient) {
  }

  forWhich: number = -1;

  onPost(form: any) {


    this.http.post('http://ourschool.somee.com/api/SchoolPostAnnouncement',
      {
        title: form.value.title,
        message: form.value.message,
        forWhich: this.forWhich

      }).subscribe(
      () => {
        window.location.reload();
      },
      error => {
        window.alert("Something went wrong please try again");
      }
    );

  }
}
