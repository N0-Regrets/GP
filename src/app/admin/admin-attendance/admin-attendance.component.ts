import {Component} from '@angular/core';
import {AdminNavigationBarComponent} from "../admin-navigation-bar/admin-navigation-bar.component";

@Component({
  selector: 'app-admin-attendance',
  standalone: true,
  imports: [
    AdminNavigationBarComponent
  ],
  templateUrl: './admin-attendance.component.html',
  styleUrl: './admin-attendance.component.css'
})
export class AdminAttendanceComponent {

}
