import {DepartmentModel} from "./department.model";
import {LevelModel} from "./level.model";
import {TermModel} from "./term.model";

export class ClassModel {
  id: number | undefined;
  number: number | undefined;
  numOfStudent: number | undefined;
  department: DepartmentModel = new DepartmentModel();
  level: LevelModel = new LevelModel();

}

