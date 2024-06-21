import {SubjectModel} from "./subject.model";
import {LevelModel} from "./level.model";
import {DepartmentModel} from "./department.model";
import {TermModel} from "./term.model";

export class SubjectRecordModel {

  subject: SubjectModel;
  term: TermModel;
  level: LevelModel;
  department: DepartmentModel;
  subLevlDeptTermId: number | undefined;

  constructor() {
    this.subject = new SubjectModel();
    this.term = new TermModel();
    this.level = new LevelModel();
    this.department = new DepartmentModel();
  }
}
