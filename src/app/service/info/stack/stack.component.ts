import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { StackService } from '../../../tool/info/stack.service';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css'],
  providers: [StackService]
})

export class StackComponent implements OnInit {
  constructor(private _stk_svc: StackService) { }

  topAnswer;
  tagAnswer;
  posts;

  ngOnInit() {
  }

  getTopAnswers() {
    this._stk_svc.getUserPosts(this.topAnswer).subscribe((res: Response) => {
      const payload = res.json();
      console.log(payload);
      this.posts = payload.items;
    });
  }

  getTagAnswers() {
    this._stk_svc.getUserPosts(this.tagAnswer).subscribe((res: Response) => {
      const payload = res.json();
      console.log(payload);
      this.posts = payload.items;
    });
  }

}
