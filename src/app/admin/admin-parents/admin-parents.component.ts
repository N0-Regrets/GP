import {Component, OnInit} from '@angular/core';
import {AdminNavigationBarComponent} from "../admin-navigation-bar/admin-navigation-bar.component";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {SearchService} from "../../services/search.service";
import {ParentModel} from "../../models/parent.model";

@Component({
  selector: 'app-admin-parents',
  standalone: true,
  imports: [
    AdminNavigationBarComponent,
    FormsModule,
    NgForOf
  ],
  templateUrl: './admin-parents.component.html',
  styleUrl: './admin-parents.component.css'
})
export class AdminParentsComponent implements OnInit {

  constructor(private http: HttpClient, private studentSearchService: SearchService) {

  }

  ngOnInit() {
    this.getParents();

  }


  searchInput: string = "";
  parents: ParentModel[] = [];
  filteredParents: ParentModel[] = [];

  getParents() {
    this.http.get('http://ourschool.somee.com/api/Parent/GetParents').subscribe(
      (response: any) => {
        this.parents = response;
      }
    );
    this.filteredParents = this.parents;
  }


  search(): void {
    this.filteredParents = this.studentSearchService.search(
      this.parents, this.searchInput);
  }

  onDelete(id: any) {
    this.http.delete('http://ourschool.somee.com/api/Parent/DeleteParent/' + id).subscribe(() => {
      window.location.reload();
    });
  }

  onRequestMeeting(id: any) {
    this.http.post('http://ourschool.somee.com/api/RequestMeeting/AddRequestMeeting' + id, {}).subscribe(() => {

    });

  }
}
