export class Subject {
  name: string;
  level: string;
  department: string;
  term: string;

  constructor(name: string, level: string, department: string, term: string) {
    this.name = name;
    this.department = department;
    this.term = term;
    this.level = level;
  }

}
