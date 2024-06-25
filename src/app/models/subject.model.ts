export class SubjectModel {
  id: number | undefined;
  name: string;
  image: File | undefined;

  constructor() {
    this.name = "";
  }
}
