import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service/data.service'
import { Observable, Subscription } from 'rxjs';



@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersSubcription: Subscription;
  users: any[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    //this.dataService.fetchUsers();
    this.dataService.fetchUsers().subscribe(
      (res) => {
        this.users = res;
      },
      (error) => { }
    )
  }
}