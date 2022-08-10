import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url ="http://localhost:3000/"
  constructor(private http : HttpClient) { }

// get user data

getUsers():Observable<any>{
  return this.http.get(`${this.url + 'users'}`);
}

// create user

createUsers(data:any):Observable<any>
{
console.log(data,'createapi=>');

return this.http.post(`${this.url + 'users'}`,data);
}


}
