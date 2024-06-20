import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Subject} from './subject.model';
import {HttpClient} from '@angular/common/http';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-admin-subjects',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './admin-subjects.component.html',
  styleUrl: './admin-subjects.component.css'
})
export class AdminSubjectsComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getSubjects();
  }

  subject: Subject = new Subject("", "", "", "");

  subjects: Subject[] = [];
  filteredSubjects: Subject[] = [];
  keys: string[] = [];

  onSubmit() {
    this.http.post('https://graduation-project-c712f-default-rtdb.firebaseio.com/subjects.json', this.subject).subscribe(() => {
      window.location.reload();
    });
  }

  onDelete(index: number) {
    this.http.delete('https://graduation-project-c712f-default-rtdb.firebaseio.com/subjects/' + this.keys.at(index) + '.json').subscribe(() => {
      window.location.reload();
    });
  }



  getSubjects() {
    this.http.get('http://ourschool.somee.com/api/Subject/GetAll').subscribe(
      (response: any) => {
        for (let responseKey in response) {
          this.subjects.push(response[responseKey]);

          this.keys.push(responseKey);
        }
      }
    );
  }


}
