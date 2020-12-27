export class CreateQuestionRequest {
    singleQuestionType: number;
    text: string;
    choices: Choice[];
}
export class Choice {
        name: string;
        isCorrect: boolean;
}