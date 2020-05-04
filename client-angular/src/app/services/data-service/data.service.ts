import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  usersSubject = new Subject<any[]>();

  private users: any;


  constructor(private httpClient: HttpClient) { }



  public fetchUsers(): Observable<any> {

    let dataUsers: Observable<any> = this.httpClient.get('http://localhost:3000/users');
    return dataUsers;
  }
  public fetchUserById(id: string): Observable<any> {
    let dataUser: Observable<any> = this.httpClient.get('http://localhost:3000/users/' + id);
    return dataUser;

  }
}
