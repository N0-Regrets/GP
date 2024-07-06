import {SubjectModel} from "./subject.model";

export class TeacherModel {

  id: number | undefined;
  name: string;
  phoneNumber: string;
  gender: string;
  birthDay: string;
  religion: string;
  nationality: string;
  degree: string;
  teacherSubjects: SubjectModel[];
  teacherSubjectsId: number[];
  email: string = "";
  gmailAddress: string = "";


  constructor() {
    this.name = "";
    this.phoneNumber = "";
    this.gender = "";
    this.birthDay = "";
    this.religion = "";
    this.nationality = ""
    this.degree = "";
    this.teacherSubjects = [];
    this.teacherSubjectsId = [];
    this.email = "";
    this.gmailAddress = "";
  }

}
