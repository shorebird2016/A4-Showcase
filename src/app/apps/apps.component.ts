import { Component, OnInit } from '@angular/core';
import {AppModelService} from '../tool/app/app-model.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

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
