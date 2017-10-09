import { Component, OnInit } from '@angular/core';
import {animate, keyframes, query, stagger, state, style, transition, trigger} from '@angular/animations';

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
    ]),

    trigger('slider', [
      state('left', style({ backgroundColor: '#FFEE00', marginLeft: 0, fontSize: '0.5em' })),
      state('right', style({ backgroundColor: 'fuchsia', marginLeft: '85%', fontSize: '2em' })),
      transition('left <=> right', animate('2.5s ease-in'))
    ]),

    trigger('bounceDot', [
      state('startPos', style({transform: 'translate(0,0)', backgroundColor: '#181eff' })),
      state('endPos', style({transform: 'translate(1px,0)' })),
      transition('startPos <=> endPos', animate('5000ms ease-in',
        keyframes([
        style({ offset: 0,   transform: 'translate(0px,   0px)', backgroundColor: '#5c8dff'  }),
        style({ offset: 0.2, transform: 'translate(0px,  -85px)', backgroundColor: '#6cff31'  }),
        style({ offset: 0.4, transform: 'translate(-85px, 0px)', backgroundColor: '#ffa27e'  }),
        style({ offset: 0.6, transform: 'translate(0px,   85px)', backgroundColor: '#ff58a1'  }),
        style({ offset: 0.8, transform: 'translate(85px,  0px)', backgroundColor: '#f9d7ff'  }),
        style({ offset: 1.0, transform: 'translate(0px,   0px)', backgroundColor: '#7f71ff'  }),
      ])))
    ]),
  ]
})

export class NgAdvComponent implements OnInit {
  constructor() {}
  items; sliding = 'left'; dotState = 'startPos';

  ngOnInit() {
    this.items = ['The first item', 'The Next awesome item', 'Third funny item'];
  }

  slideRight() {
    this.sliding = 'right';
  }
  slideLeft() {
    this.sliding = 'left';
  }
  startBounce() {
    if (this.dotState === 'startPos') {
      this.dotState = 'endPos';
    } else {
      this.dotState = 'startPos'; }
  }

  pushItem() { this.items.push('Yet another wonderful item');
    this.slideRight();
  }
  removeItem() { this.items.pop(); }
}
