import {CommonModule} from '@angular/common';
import {Announcement} from './announcement.model';
import {Component} from '@angular/core';


@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.css'
})
export class AnnouncementsComponent {


  announcements: Announcement[] = [
    new Announcement('School Picture Day', 'School picture day is coming up on [Date of picture day]. Please make sure your child is dressed in their school uniform and arrives at school on time.'),
    new Announcement('Book Fair', 'The annual book fair will be held at the school from [Date of book fair] to [Date of book fair]. There will be a wide variety of books for sale, including children\'s books, young adult books, and adult books.'),
    new Announcement('Book Fair', 'The annual book fair will be held at the school from [Date of book fair] to [Date of book fair]. There will be a wide variety of books for sale, including children\'s books, young adult books, and adult books.')
  ];


}
