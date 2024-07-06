import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() {
  }

  validateFullName(name: string): boolean {
    if (name.length == 0) {
      return true
    }
    // Check if the name contains at least two words (first and last name)
    const nameParts = name.trim().split(/\s+/);
    return nameParts.length >= 2;
  }

  validatePhoneNumber(phoneNumber: string): boolean {
    if (phoneNumber.length == 0) {
      return true
    }
    // Check if the phone number consists of 11 digits and starts with "01"
    const phoneRegex = /^01\d{9}$/;
    return phoneRegex.test(phoneNumber);
  }


}
