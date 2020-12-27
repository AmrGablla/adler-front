export class StudentHomeworkById {
  studentId: string;
  student: string;
  url: string;
  homeworkId: number;
  homework: {
    text: string;
    minCharacters: number;
    points: number;
    bonusPoints: number;
    bonusPointsStatus: number;
    groupInstanceId: number;
    groupInstance: string;
    lessonInstanceId: number;
    lessonInstance: string;
    teacherId: string;
    teacher: string;
    id: number;
    createdBy: string;
    createdDate: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
  };
  dueDate: string;
  text: string;
  solution: string;
  correctionDate: string;
  correctionTeacherId: string;
  correctionTeacher: string;
  status: string;
}
