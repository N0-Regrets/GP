import {Component, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {
  constructor(private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

}
