import { Component, OnInit } from '@angular/core';
import {animate, query, stagger, state, style, transition, trigger} from '@angular/animations';
import { flyIconAnim, SlideAnim, slideAnim1} from '../util/anim-util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    flyIconAnim('flyIconAnim', '-20px', '-500px', '800px', '-100px', 1000),
    flyIconAnim('flyItem1', '-300px', '0', '200px', '0', 300),
    flyIconAnim('flyItem2', '-300px', '0', '200px', '0', 400),
    flyIconAnim('flyItem3', '-300px', '0', '200px', '0', 500),
    flyIconAnim('flyItem4', '-300px', '0', '200px', '0', 600),
    SlideAnim('slideAnim2', '800px', '-600px', 200),

    slideAnim1,

    trigger('logoFlyIn', [
      state('specific', // NOTE: whatever reasons, can't use * here
        style({ opacity: 1, transform: 'translateX(10%)' })), // NOTE: final positions(override CSS)
      transition(':enter',
        animate('5s ease-out')), // NOTE: must be longer than initial page load to show up

      transition(':leave', animate('1s ease-in',
        style({ opacity: 0, marginLeft: '100%' })))
    ]),

    trigger('featureListAnim', [
      transition('* => *', [
        query(':enter', stagger(100, [
          style({opacity: 0.1, transform: 'translateX(-300px) translateY(400px) scale(0.1)'}),
          animate('2000ms ease-in', style({opacity: 1, transform: 'translateX(0px)'}))
        ]), {optional: true})
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {
  constructor() { }

  xxx = 'specific'; yyy = 'from'; animState1;
  ngFeatures = ['Component', 'Service', 'Directive', 'Binding', 'Animation',
    'Routing', 'Reactive Form', 'Pipe', 'Dependency Injection', 'Module'];
  feat = [];

  ngOnInit() {
    setTimeout(() => {
      for (const f of this.ngFeatures) {
        this.feat.push(f);
      }
    }, 5);
  }
  toggleYYY() {
    if (this.yyy === 'to') { this.yyy = 'from'; } else { this.yyy = 'to'; }
  }
  toggleAnimFlags() {
    this.animState1 === 'appear' ? this.animState1 = '' : this.animState1 = 'appear';
  }
}
