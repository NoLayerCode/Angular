import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent implements OnInit {

  enteredValue = '';
  tesOutput = '';
  constructor() {
    }

  ngOnInit() {
  }

  onClick() {
    // console.dir(testInput);
    this.tesOutput = this.enteredValue;
  }
}
