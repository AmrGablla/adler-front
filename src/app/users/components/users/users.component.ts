import { AuthService } from './../../../core/services/auth/auth.service';
import { UserAccountService } from './../../services/user-account.service';
import { Account } from './../../models/account.model';
import { ApiResponse } from './../../../shared/models/api-response.model';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/core/services';
import { SelectItem } from 'primeng/api';
import { ConfirmService } from 'src/app/core/services/confirmation/confirm.service';
import { Observable, forkJoin } from 'rxjs';
import { Roles } from 'src/app/shared/models/roles.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less'],
})
export class UsersComponent implements OnInit {
  // usersDialog: boolean;
  addAccountForm: FormGroup;
  editMode = false;
  account: Account = new Account();
  showConfirmPassword: boolean;
  showPassword: boolean;
  userDialog: boolean;
  users: User[];
  roles: any[];
  user: User;
  selectedUsers: Array<User>;
  submitted: boolean;
  statuses: any[];
  userData: User;
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private alertSrvc: AlertService,
    private confirmSrvc: ConfirmService,
    private userAccountService: UserAccountService
  ) {}

  ngOnInit(): void {
    this.initAddAccountForm();
    this.getAllUsers();

    this.roles = [
      { label: 'SuperAdmin', value: Roles.SuperAdmin },
      { label: 'Supervisor', value: Roles.Supervisor },
      { label: 'Secretary', value: Roles.Secretary },
      { label: 'Teacher', value: Roles.Teacher},
      { label: 'Student', value: Roles.Student },
      { label: 'Guest', value: Roles.Guest },
    ];
  }
  initAddAccountForm(): void {
    this.addAccountForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      birthDate: '',
      mobileNumber: '',
      country: '',
      role: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.addAccountForm.invalid) {
      this.addAccountForm.markAllAsTouched();
      if (this.addAccountForm.controls.confirmPassword.status === 'INVALID') {
        return this.alertSrvc.newAlert('error', "Passwords didn't match");
      }
      return this.alertSrvc.newAlert(
        'error',
        'Please complete all the required fields'
      );
    }
    this.userAccountService
      .addAccount(this.addAccountForm.value)
      .subscribe((res) => {
        this.alertSrvc.newAlert('Success', 'Added successfully');
        this.addAccountForm.reset();
        this.getAllUsers()
        this.hideDialog()
      });
  }

  openNew(): void {
    this.user = {};
    this.submitted = false;
    this.userDialog = true;
  }

  editUser(user: User): void {
    this.editMode = true;
    this.user = { ...user };
    this.userDialog = true;
    this.addAccountForm.patchValue({
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      mobileNumber: user.phoneNumber,
      role: user.role,
    });
  }
  saveEdit() {
    if (this.addAccountForm.invalid) {
      this.addAccountForm.markAllAsTouched();
      if (this.addAccountForm.controls.confirmPassword.status === 'INVALID') {
        return this.alertSrvc.newAlert('error', "Passwords didn't match");
      }
      return this.alertSrvc.newAlert(
        'error',
        'Please complete all the required fields'
      );
    }
    let userEditData = JSON.parse(JSON.stringify(this.addAccountForm.value));
    userEditData.id = this.user.id;
    this.userAccountService
      .editAccount(userEditData, this.user.id)
      .subscribe((res) => {
        this.alertSrvc.newAlert('Success', 'Added successfully');
        this.addAccountForm.reset();
        this.editMode = false;
        this.getAllUsers()
      });
    this.hideDialog();
  }

  hideDialog(): void {
    this.userDialog = false;
    this.submitted = false;
    this.editMode = false;
  }

  getAllUsers(): void {
    this.usersService.getAllUsers().subscribe((response: ApiResponse<any>) => {
      this.users = response.data;
    });
  }


  deleteUser(user: User) {
    this.confirmSrvc.newConfirmation(
      `Are you sure you want to delete ${user.firstName} ${user.lastName} ?`, () => {
        this.usersService.deleteUser(user.id).subscribe(data => {
          this.getAllUsers()
          this.removeItemFromSelectedItems(user.id)
          this.alertSrvc.newAlert('success', `Successfully Deleted`);
        })
      },'Confirm'
    );

  }

  deleteSelectedUsers() : void {
    this.confirmSrvc.newConfirmation(
      'Are you sure you want to delete the selected Users?', () => {
            let deleteRequests : Observable<any>[] = []
            if( this.selectedUsers && Array.isArray(this.selectedUsers) )this.selectedUsers.forEach((user)=>{
              deleteRequests.push(this.usersService.deleteUser(user.id))
            })
            this.selectedUsers = null;
            forkJoin(deleteRequests)
            .subscribe((res)=>{
              this.alertSrvc.newAlert('success', `Successfully Deleted`);
            })
        },'Confirm'
    );
  }



  // refresh the selected items if the deleted item is already selected
  removeItemFromSelectedItems(id:string){
    if( this.selectedUsers && Array.isArray(this.selectedUsers) ){
        const filteredItems = this.selectedUsers.filter((user:any)=>{
            return user.id != id
        })
        this.selectedUsers = [...filteredItems]
    }
  }

}
