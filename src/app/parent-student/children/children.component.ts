import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-children',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './children.component.html',
  styleUrl: './children.component.css'
})
export class ChildrenComponent implements OnInit {


  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.getChildren();

  }


  children: any[] = [];


  parentId = this.route.snapshot.params["parent-id"];


  getChildren() {
    this.http.get('http://ourschool.somee.com/api/Parent/GetStudentsOfParents/', {params: {id: this.parentId}}).subscribe(
      (response: any) => {
        this.children = response;
      }
    );
  }

  getImage(gender: string) {

    gender = gender.toLowerCase();
    if (gender == "m") {
      return "../../../assets/images/boy.png";
    } else {
      return "../../../assets/images/girl.png";
    }
  }


}
