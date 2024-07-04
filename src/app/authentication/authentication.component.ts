import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";
import {response} from "express";
import {Router} from "@angular/router";
import {User} from "../models/user.model";

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {

  constructor(private authService: AuthenticationService, private router: Router,
              private authenticationService: AuthenticationService) {
  }

  direct(user: User) {
    if (user.role == "admin") {

    } else if (user.role == "teacher") {

    } else if (user.role == "parent") {

    } else if (user.role == "student") {

    }
  }

  onSign(form: any) {
    console.log(form.value);
    this.authService.signIn(form.value.email, form.value.password).subscribe(
      response => {
        this.direct(response);
      }
    );
  }
}
