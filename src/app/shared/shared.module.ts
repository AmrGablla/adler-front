import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NumberCharacterDirective } from './directves/number-character.directive';
import { confirmEquelValidator } from './directves/confirm-equel-validtor';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { PasswordModule } from 'primeng/password';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { SwitchListComponent } from './components/switch-list/switch-list.component';
import { InputTextareaModule } from 'primeng/inputtextarea';

const declarations = [
  NumberCharacterDirective,
  confirmEquelValidator,
  SwitchListComponent
];
const imports = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  TableModule,
  ToolbarModule,
  DialogModule,
  ToastModule,
  TooltipModule,
  CardModule,
  ButtonModule,
  PanelModule,
  ProgressSpinnerModule,
  ConfirmDialogModule,
  FileUploadModule,
  RadioButtonModule,
  InputNumberModule,
  DropdownModule,
  MenubarModule,
  PasswordModule,
  DynamicDialogModule,
  InputTextareaModule

];

@NgModule({
  declarations: [
    ...declarations
  ],
  imports: [
    ...imports
  ],
  exports: [
    ...declarations,
    ...imports
  ]
})
export class SharedModule { }
