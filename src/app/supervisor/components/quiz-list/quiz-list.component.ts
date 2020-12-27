import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { AlertService } from 'src/app/core/services';
import { ConfirmService } from 'src/app/core/services/confirmation/confirm.service';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.less']
})
export class QuizListComponent implements OnInit {
  selectedItems: any = []
  itemList: any;
  showDialog: boolean;
  constructor(
    private quizService: QuizService,
    private confirmService : ConfirmService,
    private alertService : AlertService,
    ) {}

  ngOnInit(): void {
    this.getRequests();
  }
  getRequests(): void {
    this.quizService.getAllQuizes().subscribe((response) => {
      this.itemList = response;
    });
  }
  deleteUser(user: any) {
    this.confirmService.newConfirmation(
      `Are you sure you want to delete this Quiz ?`, () => {
        this.quizService.deleteQuiz(user.id).subscribe(data => {
          this.getRequests()
          this.removeItemFromSelectedItems(user.id)
          this.alertService.newAlert('success', `Successfully Deleted`);
        })
      },'Confirm'
    );

  }

  deleteselectedItems() : void {
    this.confirmService.newConfirmation(
      'Are you sure you want to delete the selected Quizes?', () => {
            let deleteRequests : Observable<any>[] = []
            if( this.selectedItems && Array.isArray(this.selectedItems) )this.selectedItems.forEach((user)=>{
              deleteRequests.push(this.quizService.deleteQuiz(user.id))
            })
            this.selectedItems = null;
            forkJoin(deleteRequests)
            .subscribe((res)=>{
              this.alertService.newAlert('success', `Successfully Deleted`);
            })
        },'Confirm'
    );
  }



  // refresh the selected items if the deleted item is already selected
  removeItemFromSelectedItems(id:string){
    if( this.selectedItems && Array.isArray(this.selectedItems) ){
        const filteredItems = this.selectedItems.filter((user:any)=>{
            return user.id != id
        })
        this.selectedItems = [...filteredItems]
    }
  }

}
