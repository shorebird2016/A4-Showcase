import { Component, OnInit } from '@angular/core';
import {AppModelService} from '../tool/app/app-model.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
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
