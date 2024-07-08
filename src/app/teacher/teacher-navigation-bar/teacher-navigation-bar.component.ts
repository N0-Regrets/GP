import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-teacher-navigation-bar',
  standalone: true,
  imports: [],
  templateUrl: './teacher-navigation-bar.component.html',
  styleUrl: './teacher-navigation-bar.component.css'
})
export class TeacherNavigationBarComponent {


  teacherId = this.route.snapshot.params["teacher-id"];

  currentUrl: string = "";

  constructor(private router: Router, private route: ActivatedRoute, protected authenticationService: AuthenticationService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
      }
    });
  }



  isActive(url: string): boolean {
    return this.currentUrl === url;
  }

}
