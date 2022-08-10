import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['no','name','mobile','email'];
  userData: any;

  constructor(private readonly api:ApiService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.api.getUsers().subscribe((res:any)=>{
      this.userData = res.data;
      console.log(this.userData);
      
    });
  }

}
