import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

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

}
