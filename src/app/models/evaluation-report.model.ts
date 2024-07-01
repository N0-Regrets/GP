export class EvaluationReportModel {
  status: any;
  progressLevel: string | undefined;
  attitude: any;
  advantages: string | undefined;
  disadvantages: string | undefined;
  recommendations: string | undefined;
  studentId: any;
  subjectId: any;
  teacherId: any;

  toNumber() {
    this.teacherId = +this.teacherId;
    this.studentId = +this.studentId;
    this.subjectId = +this.subjectId;
    this.status = +this.status;
    this.attitude = +this.attitude;
  }
}
