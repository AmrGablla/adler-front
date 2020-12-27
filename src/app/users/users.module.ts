import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UsersService } from './services/users.service';
import { UsersComponent } from './components/users/users.component';
import { CreateEditUserComponent } from './components/create-edit-user/create-edit-user.component';

@NgModule({
  declarations: [UsersComponent, CreateEditUserComponent],
  providers: [UsersService],
  imports: [CommonModule, UsersRoutingModule, SharedModule],
})
export class UsersModule {}
