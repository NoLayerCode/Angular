import { Component, OnInit} from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // posts = [
  //   { title: 'First Post', content: 'This is First Post' },
  //   { title: 'Second Post', content: 'This is Second Post' },
  //   { title: 'Third Post', content: 'This is Third Post' },
  // ];

  posts: Post[] = [];
  constructor(public postsService: PostsService) {
  }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsService.getUpdateListener().subscribe();
  }


}
