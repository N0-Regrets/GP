import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-admin-add-announcement',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './admin-add-announcement.component.html',
  styleUrl: './admin-add-announcement.component.css'
})
export class AdminAddAnnouncementComponent {
  constructor(private http: HttpClient) {
  }

  onPost(form: any) {

    console.log(form.value.title);
    console.log(form.value.message)
    console.log(form.value.forWhich)
    this.http.post('http://ourschool.somee.com/api/SchoolPostAnnouncement',
      {
        title: form.value.title,
        message: form.value.message,
        forWhich: form.value.forWhich

      }).subscribe(
      () => {
        window.location.reload();
      }
    );

  }
}
