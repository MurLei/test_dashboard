import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DialogComponent } from '../dialog/dialog.component';
import {MatTableModule} from '@angular/material/table';
import { AddUsersComponent } from './add-users.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddUsersComponent, ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class AddUserModule { }
