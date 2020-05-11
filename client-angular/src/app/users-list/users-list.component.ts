import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service/data.service'
import { Observable, Subscription, from } from 'rxjs';
import { User } from '../models/user/user';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersSubcription: Subscription;
  users: User[];
  user: User;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //this.dataService.fetchUsers();
    this.dataService.fetchUsers()
      .subscribe(
        (res) => {
          this.users = res;
        },
        (error) => { }
      )
    this.dataService.fetchUserById('5eaecda0cba960e77fc9f205')
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => { }
      )

  }
}