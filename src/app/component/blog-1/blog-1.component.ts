import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-1',
  templateUrl: './blog-1.component.html',
  styleUrls: ['./blog-1.component.css']
})
export class Blog1Component implements OnInit {
  constructor() { }
  nameEntry = '';
  textEntry = '';
  blog = [
    // { submitter: 'CLUE', blogText: 'Blog from CLUE' },
    { submitter: 'ANNE DROID', blogText: 'Blog from ANNE' }
  ];

  ngOnInit() {}

  submitPost = function () {
    const new_blog = {
      submitter: this.nameEntry,
      blogText: this.textEntry
    };
    this.blog.push(new_blog);
    this.nameEntry = '';
    this.textEntry = ''; // TODO this doesn't work somehow
  };

  removeBlog = function ($index) {
    this.blog.splice($index, 1);
  };

}
