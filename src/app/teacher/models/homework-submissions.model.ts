export class HomeWorkSubmission {
  id: number;
  studentId: number;
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
    lessonInstance: {
      groupInstanceId?: number;
      groupInstance?: string;
      lessonDefinitionId?: number;
      lessonDefinition?: string;
      materialDone?: number;
      materialToDo?: number;
      serial?: string;
      lessonInstanceStudents?: [];
      id: number;
      createdBy: Date;
      createdDate: Date;
      lastModifiedBy: Date;
      lastModifiedDate: Date;
    };
    teacherId: number;
    teacher: string;
    id: number;
    createdBy: Date;
    createdDate: Date;
    lastModifiedBy: Date;
    lastModifiedDate: Date;
  };
  dueDate: Date;
  text: string;
  solution: string;
  correctionDate: Date;
  correctionTeacherId: number;
  correctionTeacher: string;
  status: string;
}
