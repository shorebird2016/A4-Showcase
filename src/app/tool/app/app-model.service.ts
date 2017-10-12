import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()

export class AppModelService {
  constructor() { }

  private dataSource = new BehaviorSubject<boolean>(true);
  popMenuVisible = this.dataSource.asObservable();

  // isPopMenuVisible() { return this.popMenuVisible; } // TODO can I use setter and getter????
  setPopMenuVisible(visible) {
    this.dataSource.next(visible);
  }

  togglePopMenuVisibility() {
    const visible = !this.dataSource.value;
    this.dataSource.next(visible);
  }
}
