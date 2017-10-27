import { Component, OnInit } from '@angular/core';
import {fadeInAnim, fadeOutAnim} from '../../util/anim-util';
import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-ng-list',
  templateUrl: './ng-list.component.html',
  styleUrls: ['./ng-list.component.css'],
  animations: [
    fadeInAnim(
      style({ opacity: 0.1, transform: 'translateX(-200px)' }),
      style({ opacity: 1 }),
      '500ms'
    ),

    fadeOutAnim(
      '500ms'
    ),

    // TODO this does not work for initial loading transition
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({opacity: 0 }),
          stagger('300ms', [
            animate('1000ms', keyframes([
              style({opacity: 0, transform: 'translateY(-75px)', offset: '0'}),
              style({opacity: 0.4, transform: 'translateY(0px)', offset: '0.35'}),
              style({opacity: 0.8, transform: 'translateY(35px)', offset: '0.65'}),
              style({opacity: 1, transform: 'translateY(0)', offset: '1'})
            ]))
        ])],{optional: true}),

        query(':leave', [
          style({opacity: 1 }),
          stagger('100ms', [
            animate('600ms', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: '0'}),
              style({opacity: 0.8, transform: 'translateY(35px)', offset: '0.35'}),
              style({opacity: 0.4, transform: 'translateY(-50px)', offset: '0.65'}),
              style({opacity: 0, transform: 'translateY(-150px)', offset: '1'}),
            ]))
          ])], {optional: true})
      ])
    ]),

  ]
})

export class NgListComponent implements OnInit {
  constructor() { }

  list = ['item 1', 'item 2', 'item 3'];
  src2 = ['Animation Keywords', 'Trigger, State, Transition, Style, Animate', 'Stagger, Keyframes, Query' ];
  list2 = ['Animation Keywords', 'Trigger, State, Transition, Style, Animate' ];
  item;
  animState = 'appear';

  ngOnInit() {}

  addItem() {
    this.list.push(this.item);
    this.item = '';
  }
  removeItem() { this.list.pop(); }

  addItem2() { this.list2.push('Stagger, Keyframes, Query'); }
  removeItem2() { this.list2.pop(); }
  removeAll2() { this.list2 = []; }
  addAll2() {
    this.list2 = [];
    this.list2.push(this.src2[0]);
    this.list2.push(this.src2[1]);
    this.list2.push(this.src2[2]);
    this.list2.push(this.src2[0]);
    this.list2.push(this.src2[1]);
    this.list2.push(this.src2[2]);
  }
}
