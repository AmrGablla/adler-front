export class LessonReport {
    id: string;
    materialDone: string;
    materialToDo: string;
    lessonInstanceStudent: LessonInstanceStudent[];
    isAdditionalHomework: boolean;
    additionalHomework?: AdditionalHomework
}

export class AdditionalHomework {
    groupInstanceId: string;
    text : string;
    minCharacters: number;
    points:number;
    bonusPoints: number;
}

export class LessonInstanceStudent {
    id: string;
    lessonInstanceId: number;
    studentId: string;
    attend: boolean;
    homework:boolean;
}