import { User } from '../../shared/models/user.model';
export class HomeworkItem {
    studentId: string;
    student: User;
    url: null;
    homeworkId: number;
    homework: Homework;
    dueDate: null;
    text: string;
    solution: string;
    correctionDate: string;
    correctionTeacherId: number;
    correctionTeacher: User;
    status: string;
    submitionDate: string;
}
export class Homework {
    text: string;
    minCharacters: number;
    points: number;
    bonusPoints: number;
    bonusPointsStatus: number;
    groupInstanceId: number;
    groupInstance: null;
    lessonInstanceId: number;
    lessonInstance: LessonInstance;
    teacherId: number;
    teacher: null;
    id: number;
    createdBy: string;
    createdDate: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
}
export class LessonInstance {
    groupInstanceId: 1;
    groupInstance: null;
    lessonDefinitionId: 1;
    lessonDefinition: null;
    materialDone: string;
    materialToDo: string;
    serial: string;
    lessonInstanceStudents: User[];
    id: number;
    createdBy: string;
    createdDate: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
}
export class HomeworkSubmition {
    id: number;
    solution: string;
    correctionTeacherId: string;
    points:number
}
