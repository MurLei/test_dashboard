import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {

  // displayedColumns: string[] = ['No', 'Name', 'Mob no', 'Email'];
  // source: any;

  constructor(private readonly matDialog: MatDialog, private readonly api: ApiService) { }

  readData: any;


  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.api.getUsers().subscribe((res: any) => {
      this.readData = res.data;
      // console.log(res.data);
      // this.source = new MatTableDataSource(res.data);
    });
  }

  openDialog() {
    this.matDialog.open(DialogComponent)
  }

}
