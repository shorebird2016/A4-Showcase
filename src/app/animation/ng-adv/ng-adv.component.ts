import { Component, OnInit } from '@angular/core';
import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-ng-adv',
  templateUrl: './ng-adv.component.html',
  styleUrls: ['./ng-adv.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
            style({opacity: 0.5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: 0.5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75px)', offset: 1}),
          ]))
        ]), {optional: true}),
      ])
    ]),

    trigger('explainerAnim', [
      transition('* => *', [
        query('.col', style({opacity: 0, transform: 'translateX(-40px)'})),
        query('.col', stagger('500ms', [
          animate('800ms 1.2s ease-out', style({opacity: 0, tarnsform: 'translateX(0)'}))
        ]))
      ])
    ])

  ]
})
export class NgAdvComponent implements OnInit {
  constructor() {
  }
  items;
  ngOnInit() {
    this.items = ['The first item', 'The Next awesome item', 'Third funny item'];
  }

  pushItem() { this.items.push('Yet another wonderful item'); }
  removeItem() { this.items.pop(); }
}
