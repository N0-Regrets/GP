import {Component} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterLinkActive} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-admin-navigation-bar',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './admin-navigation-bar.component.html',
  styleUrl: './admin-navigation-bar.component.css'
})
export class AdminNavigationBarComponent {

  currentUrl: string = "";

  constructor(private router: Router, protected authenticationService: AuthenticationService) {
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
