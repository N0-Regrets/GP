import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css'
})
export class SubjectsComponent {
  // subjects: Subject[] = [
  //   new Subject('Arabic', '../../assets/images/arabic.jpg'),
  //   new Subject('English', '../../assets/images/english.jpg'),
  //   new Subject('History', '../../assets/images/history.jpg'),
  //   new Subject('Physics', '../../assets/images/physics.jpg'),
  //   new Subject('Chemistry', '../../assets/images/chemistry.jpg'),
  //   new Subject('Biology', '../../assets/images/bio.jpg'),
  //   new Subject('Geology', '../../assets/images/geo.jpg'),
  //   new Subject('Philosophy', '../../assets/images/philosophy.jpg'),
  //   new Subject('Math', '../../assets/images/math.jpg')
  // ];
}
