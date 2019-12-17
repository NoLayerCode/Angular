import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { Alert } from 'selenium-webdriver';

import { Post } from '../post.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent implements OnInit {

  enteredContent = '';
  enteredTitle = '';
  @Output() postCreated = new EventEmitter <Post> ();

  constructor() {
  }

  ngOnInit() {
  }

  onClick(form: NgForm) {
    if (form.invalid){
      return;
    }
    const post: Post = {
       title: form.value.title,
       content: form.value.content
      };

    this.postCreated.emit(post);
  }
}
