import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class searchService {

  constructor() {
  }

  searchStudents(students: any[], name: string, levelId: string, classId: string): any[] {
    return students.filter(student =>
      (name ? student.name.toLowerCase().includes(name.toLowerCase()) : true) &&
      (levelId ? student.levelId.toString() === levelId : true) &&
      (classId ? student.classId.toString() === classId : true)
    );
  }
}
