import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {TeacherNavigationBarComponent} from "../../teacher/teacher-navigation-bar/teacher-navigation-bar.component";
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";

@Component({
  selector: 'app-materials',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    TeacherNavigationBarComponent,
    NavigationBarComponent,
    NgIf
  ],
  templateUrl: './materials.component.html',
  styleUrl: './materials.component.css'
})
export class MaterialsComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllFiles();
  }

  studentId = this.route.snapshot.params["student-id"];
  subjectId = this.route.snapshot.params["subject-id"];
  materialType = this.route.snapshot.params["material-id"];
  files: any[] = [];


  checkIfUrlContainsTeacher(): boolean {
    const currentUrl = this.router.url;
    return currentUrl.includes('teacher');
  }

  getAllFiles() {
    console.log(this.studentId)
    console.log(this.subjectId)

    this.http.get('http://ourschool.somee.com/api/Material/GetMaterialForStudent/'
      + this.materialType, {
      params: {
        SubjectId: +this.subjectId,
        StudentId: +this.studentId
      }
    }).subscribe(
      (response: any) => {
        this.files = response;
        console.log(response)
      }
    );
  }


  downloadFile(fileId: any) {
    this.http.get('http://ourschool.somee.com/api/Material/DownloadMaterial/' + fileId, {}).subscribe();
  }
}
