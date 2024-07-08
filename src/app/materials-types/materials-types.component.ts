import {Component} from '@angular/core';
import {TeacherNavigationBarComponent} from "../teacher/teacher-navigation-bar/teacher-navigation-bar.component";
import {ActivatedRoute, Router} from "@angular/router";
import {NavigationBarComponent} from "../parent-student/navigation-bar/navigation-bar.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-teacher-materials',
  standalone: true,
  imports: [
    TeacherNavigationBarComponent,
    NavigationBarComponent,
    NgIf
  ],
  templateUrl: './materials-types.component.html',
  styleUrl: './materials-types.component.css'
})
export class MaterialsTypesComponent {
  constructor(private route: ActivatedRoute, private router: Router) {
    console.log(this.router.url);
  }


  addParameterToCurrentUrl(materialType: string): void {
    console.log(this.router.url + '/' + materialType)
    this.router.navigate([this.router.url + '/' + materialType])

  }

  checkIfUrlContainsTeacher(): boolean {
    const currentUrl = this.router.url;
    return currentUrl.includes('teacher');
  }
}
