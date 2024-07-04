import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, Subject, tap, throwError} from "rxjs";
import {User} from "../models/user.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) {
  }

  user = new BehaviorSubject<User | null>(null);

  signIn(email: string, password: string) {
    return this.http.post<User>('http://ourschool.somee.com/api/Login', {email: email, password: password}).pipe(
      catchError(error => {
        // Handle the error here
        console.error('Error occurred:', error);
        return throwError(error);
      }),
      tap(data => {
        this.user.next(data);
        localStorage.setItem('user', JSON.stringify(data));
        console.log(data)
      })
    );
  }

  automaticLogin() {
    const userDataJson = localStorage.getItem('user');
    if (!userDataJson) {
      return;
    }
    const userData = JSON.parse(userDataJson);
    const loadedUser = new User(userData.id, userData.userId, userData.role, userData.token,);
    if (loadedUser.token) {
      this.user.next(loadedUser);
    }
  }

  signOut() {
    this.user.next(null);
    localStorage.clear();
    this.router.navigate(['/'])
  }
}
