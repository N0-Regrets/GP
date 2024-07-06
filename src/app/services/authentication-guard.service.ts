import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {

  constructor() {
  }

  canActivate(): boolean {

    const userDataJson = localStorage.getItem('user');
    if (userDataJson) {
      return false;
    }
    return true;
  }
}
