import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";
import {response} from "express";
import {Router} from "@angular/router";
import {User} from "../models/user.model";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [
    FormsModule, NgIf
  ],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {
  errorMessage: string = "";

  constructor(private authService: AuthenticationService, private router: Router,
              private authenticationService: AuthenticationService) {
  }

  direct(user: User) {
    if (user.role == "Admin") {
      this.router.navigate(['/admin/view-students'])

    } else if (user.role == "Teacher") {
      this.router.navigate(['/teacher/announcements/', user.id])

    } else if (user.role == "Parent") {
      this.router.navigate(['/children/', user.id])
    } else if (user.role == "Student") {
      this.router.navigate(['/profile/x/', user.id])
    }
  }

  onSign(form: any) {
    this.authService.signIn(form.value.email, form.value.password).subscribe(
      response => {
        this.direct(response);
      },
      error => {
        this.errorMessage = 'Login failed. Email or password is incorrect.';
        console.log(this.errorMessage);
      }
    );
  }
}
