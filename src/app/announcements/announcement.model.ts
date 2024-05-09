export class Announcement {
  title: string;
  date: Date;
  body: string;

  constructor(title: string, body: string) {
    this.title = title;
    this.date = new Date();
    this.body = body;
  }
}
