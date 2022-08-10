import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { dialogRouting } from './dialog.route';



@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    dialogRouting
  ]
})
export class DialogModule { }
