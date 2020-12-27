import { Component, OnInit } from '@angular/core';
import { QuestionTypesModel } from '../../models/question-types-model';
import { QuestionType } from '../../../shared/models/question-type.model'
import { QuestionService } from '../../services/question.service';
import { Choice, CreateQuestionRequest } from '../../models/create-question-request.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertService } from 'src/app/core/services';
@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.less'],
})
export class CreateQuestionComponent implements OnInit {
  form: FormGroup;
  questionTypes: QuestionTypesModel[];
  selectedQuetionType = new Object as QuestionTypesModel;
  singleQuestion = new Object() as CreateQuestionRequest;
  answers: Choice[] = [];
  editMode: boolean[] = [];
  count = 1;
  label = '';
  constructor(
    private questionService: QuestionService,
    private formBuilder: FormBuilder,
    private alertService: AlertService) {
    this.questionTypes = [
      { label: 'Single Choice', value: QuestionType.SingleChoice },
      { label: 'Multiple Choice', value: QuestionType.MultipleChoice }
    ];
  }

  showSelectedQuestionType(event) {
    this.count = 1;
    this.answers = [];
    this.answers.push({ name: '', isCorrect: false });
    this.editMode = [true];
    this.selectedQuetionType = event;
  }


  ngOnInit(): void {
    this.loadForm();
    this.answers.push({ name: '', isCorrect: false });
    this.editMode[0] = true;
    this.selectedQuetionType = { label: 'Single Choice', value: QuestionType.SingleChoice };
  }
  loadForm() {
    this.form = this.formBuilder.group({
      QuestionTypeField: QuestionType.SingleChoice,
      QuestionTextField: '',
      choicesField: [],
      currentLabelField: ''
    });
  }
  toggleLabelEditingMode() {
    if (this.form.controls.currentLabelField.value) {
      this.answers[this.count - 1].name = this.form.controls.currentLabelField.value;
      this.form.controls.currentLabelField.setValue('');
      this.editMode[this.count - 1] = !this.editMode[this.count - 1];
      this.editMode[this.count] = true;
    }

  }
  addAnswer() {
    if (this.answers[this.count - 1].name) {
      this.count++;
      this.answers.push({ name: '', isCorrect: false });
      this.editMode[this.count - 1] = true;
    } else {
      this.alertService.newAlert('error', 'Please Enter Answer Text');
    }
  }

  selectSingleRightAnswer(answer) {
    for (let elem of this.answers) {
      elem.isCorrect = false;
    }
    answer.isCorrect = true;
  }

  selectMultipleRightAnswers(answer, status) {
    this.answers.find(elem => {
      if (elem == answer) {
        elem.isCorrect = status;
      }
    });
  }

  remove(index) {
    this.answers.splice(index, 1);
    this.editMode.splice(index, 1);
    this.count--;
  }

  createSingleQuestion() {
    this.singleQuestion.singleQuestionType = this.form.controls.QuestionTypeField.value;
    this.singleQuestion.text = this.form.controls.QuestionTextField.value;
    this.singleQuestion.choices = this.answers;
    for (let choice of this.singleQuestion.choices) {
      if (choice.isCorrect == true) {
        this.createSingleQuestionrequest();
        return;
      }
    }
    this.alertService.newAlert('error', 'Please Select the right answers');

  }
  createSingleQuestionrequest() {
    this.questionService.createSingleQuestion(this.singleQuestion).subscribe(res => {
      this.alertService.newAlert('success', 'Question created succeffuly');
      this.count = 1;
      this.answers = [];
      this.answers.push({ name: '', isCorrect: false });
      this.editMode = [true];
      this.loadForm();
    });
  }
}
