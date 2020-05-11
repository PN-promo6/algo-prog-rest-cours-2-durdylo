import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data-service/data.service';
import { Post } from '../models/post/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Post[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchPosts()
      .subscribe(
        (res) => {
          this.posts = res;
        },
        (error) => { }
      )
  }

}
