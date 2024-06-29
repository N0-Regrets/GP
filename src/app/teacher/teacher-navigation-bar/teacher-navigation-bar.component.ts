import {Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-teacher-navigation-bar',
  standalone: true,
  imports: [],
  templateUrl: './teacher-navigation-bar.component.html',
  styleUrl: './teacher-navigation-bar.component.css'
})
export class TeacherNavigationBarComponent {


  currentUrl: string = "";

  constructor(private router: Router) {
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
