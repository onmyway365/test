import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostsService) { }

  ngOnInit() {
    const newArray = [];

    this.postService.getPosts().subscribe(data => {
      Object.keys(data).forEach((record, key) => {
        const item = data[key];
        if (item.id < 21) {
          newArray.push(item);
        }
        this.posts = newArray;
      });
    });
  }

}
