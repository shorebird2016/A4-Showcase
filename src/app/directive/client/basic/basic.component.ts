import { Component, OnInit } from '@angular/core';
import {state, trigger, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
  animations: [
    trigger('showHide', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0.1 })),
      transition('visible <=> hidden', animate('500ms linear'))
    ]),

    trigger('sizing', [
      state('narrow', style({ width: '200px', height: '30px' })),
      state('wide', style({ width: '400px', height: '35px' })),
      transition('narrow <=> wide', animate('300ms ease-out'))
    ])
  ]
})

export class BasicComponent implements OnInit {
  constructor() { }

  visibility = 'visible'; size = 'narrow'; nameEntry = 'default name';

  ngOnInit() {
  }
  animateVisibility() {
    this.visibility === 'visible' ? this.visibility = 'hidden' : this.visibility = 'visible';
  }
  toggleSize() {
    this.size === 'narrow' ? this.size = 'wide' : this.size = 'narrow';
  }
  changeSize(sz) {
    this.size = sz;
  }
}
