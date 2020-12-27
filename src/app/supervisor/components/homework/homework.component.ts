import { SupervisorHomeworkService } from './../../services/supervisor-homework.service';
import { BonusRequest } from '../../models/bonus-request.model';
import { UpdateBonusRequest } from '../../models/update-bonus-request.modal';
import { Component, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/shared/models/api-response.model';
import { AlertService } from 'src/app/core/services';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.less'],
})
export class HomeworkComponent implements OnInit {
  selectedRequest: BonusRequest
  bonusRequests: BonusRequest[];
  bonusRequest: BonusRequest;
  requestDialog: boolean;
  submitted: boolean;

  // bonusRequest = {
  //   text: 'home work for test',
  //   minCharacters: 100,
  //   points: 25,
  //   bonusPoints: 0,
  //   lessonOrder: null,
  //   teacherName: null,
  //   subLevel: null,
  //   bonusPointsStatus: 0,
  //   groupInstanceId: 0,
  //   groupInstanceSerial: null,
  //   lessonInstanceId: 0,
  //   lessonInstanceSerial: null,
  // };
  constructor(
    private supervisorHomeworkService: SupervisorHomeworkService,
    private alertService:AlertService
    ) {}

  ngOnInit(): void {
    this.getRequests();
  }
  getRequests(): void {
    this.supervisorHomeworkService.getAllRequests().subscribe((response) => {
      this.bonusRequests = response;
    });
  }

  showModal(request: BonusRequest) {
    // this.editMode = true;
    // this.user = { ...user };
    this.requestDialog = true;
    this.selectedRequest = request
    this.newBonusPoints = request.bonusPoints
    // this.addAccountForm.patchValue({
    //   firstName: user.firstName,
    //   lastName: user.lastName,
    //   userName: user.userName,
    //   email: user.email,
    //   mobileNumber: user.phoneNumber,,,
    //   role: user.role,
    // });
    // console.log('editMode', this.editMode);
  }
  rejectRequest(bonusRequest:BonusRequest){
    let req : UpdateBonusRequest = new UpdateBonusRequest()
    req.bonusPoints = bonusRequest.bonusPoints
    req.bonusPointsStatus = 2
    req.id = bonusRequest.id // change here
    this.supervisorHomeworkService.updateBonusRequest(req)
    .subscribe((res)=>{
      this.alertService.newAlert('success',"Saved successfully")
      this.getRequests()
    })
  }
  acceptRequest(){
    let req : UpdateBonusRequest = new UpdateBonusRequest()
    req.bonusPoints = this.newBonusPoints
    req.bonusPointsStatus = 1
    req.id = this.selectedRequest.id
    this.supervisorHomeworkService.updateBonusRequest(req)
    .subscribe((res)=>{
      this.alertService.newAlert('success',"Saved successfully")
      this.getRequests()
    })
    this.hideDialog()
  }
  newBonusPoints :number
  hideDialog(): void {
    this.requestDialog = false;
    this.submitted = false;
    this.newBonusPoints = undefined
  }
}
