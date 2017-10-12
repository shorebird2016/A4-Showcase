import { Component, OnInit } from '@angular/core';
import {AppModelService} from '../tool/app/app-model.service';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})

export class DirectiveComponent implements OnInit {
  constructor(private _svc: AppModelService) { }

  popMenuVisible = true;
  contentWidth = '80%';

  ngOnInit() {
    this._svc.popMenuVisible.subscribe((visible) => {
      this.popMenuVisible = visible;
      // if menu is hidden, make main content larger
      this.contentWidth = visible ? '80%' : '100%';
    });
  }

}
