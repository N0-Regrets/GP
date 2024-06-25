export class StudentModel {

  name: string;
  religion: string;
  birthDay: string;
  age: number | undefined;
  phoneNumber: string;
  address: string;
  nationality: string;
  gender: string;
  parentId: number | undefined;
  levelId: number | undefined;
  departmentId: number | undefined;
  classId: number | undefined;
  id: number | undefined;


  //Default constructor
  constructor() {
    this.name = "";
    this.religion = "";
    this.birthDay = "";
    this.phoneNumber = "";
    this.address = "";
    this.nationality = "";
    this.gender = "";
  }

}
