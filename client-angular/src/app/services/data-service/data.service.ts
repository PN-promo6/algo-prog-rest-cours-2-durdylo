import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from "rxjs";
import { User } from '../../models/user/user';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private users: any;


  constructor(private httpClient: HttpClient) { }



  public fetchUsers(): Observable<User[]> {

    let dataUsers: Observable<User[]> = this.httpClient.get<User[]>('http://localhost:3000/users');


    return dataUsers;
  }
  public fetchUserById(id: string): Observable<User> {
    let dataUser: Observable<User> = this.httpClient.get<User>('http://localhost:3000/users/' + id);
    return dataUser;

  }
}
