import { Component } from '@angular/core';
// import { post } from 'selenium-webdriver/http';
import { Post } from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-stack';

  storedPosts = [];

  // tslint:disable-next-line: no-shadowed-variable
  onPostAdded( post ) {
    this.storedPosts.push(post);

  }
}
