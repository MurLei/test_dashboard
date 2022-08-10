import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  

  getparamid: any;
  userForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<DialogComponent>, private api: ApiService, private activeRoute: ActivatedRoute) {
    this.userForm = new FormGroup({
      'fullname': new FormControl('', Validators.required),
      'mobile': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
console.log('this is dialog');

   
  }

  // createNewUser

  userSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.api.createUsers(this.userForm.value).subscribe((res => {
        console.log(res, 'createUser');
        this.userForm.reset();

      }))

    }

  }

  closeDialog() {
    this.dialogRef.close
  }

}
