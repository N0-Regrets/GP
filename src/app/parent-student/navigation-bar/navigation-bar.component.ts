import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {ChatbotComponent} from "../../chatbot/chatbot.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    ChatbotComponent,
    NgIf
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {

  parentId = this.route.snapshot.params["parent-id"];
  studentId = this.route.snapshot.params["student-id"];
  subjectId = this.route.snapshot.params["subject-id"];
  materialId = this.route.snapshot.params["material-id"];
  currentUrl: string = "";

  constructor(private router: Router, protected authenticationService: AuthenticationService, private route: ActivatedRoute) {
    console.log(this.parentId);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
      }
    });
  }

  isActive(url: string): boolean {
    return this.currentUrl == url;
  }

}
