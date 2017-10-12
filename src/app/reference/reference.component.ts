import { Component, OnInit } from '@angular/core';
import {AppModelService} from '../tool/app/app-model.service';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})

export class ReferenceComponent implements OnInit {
  constructor(private _svc: AppModelService) { }

  popMenuVisible;
  contentWidth = '80%';

  ngOnInit() {
    this._svc.popMenuVisible.subscribe((visible) => {
      // change popup menu state from notification
      this.popMenuVisible = visible;
      // if menu is hidden, make main content larger
      this.contentWidth = visible ? '80%' : '100%';
    });
  }

}
