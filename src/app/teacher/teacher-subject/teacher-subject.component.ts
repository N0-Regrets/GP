import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-subject',
  standalone: true,
  imports: [],
  templateUrl: './teacher-subject.component.html',
  styleUrl: './teacher-subject.component.css'
})
export class TeacherSubjectComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit() {
  }


  navigateToBooks() {
    this.router.navigate(['books'])
  }

  navigateToSummaries() {
    this.router.navigate(['summaries'])
  }

  navigateToRevisions() {
    this.router.navigate(['revisions'])
  }

  navigateToVideos() {
    this.router.navigate(['videos'])
  }
  navigateToSExams() {
    this.router.navigate(['exams'])
  }
}
