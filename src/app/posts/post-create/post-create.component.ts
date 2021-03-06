import { Component, OnInit } from '@angular/core';

import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent implements OnInit {

  enteredContent = '';
  enteredTitle = '';

  constructor(public postsService: PostsService) {
  }

  ngOnInit() {
  }

  onClick(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };

    // this.postCreated.emit(post);
  }
}
