import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SlideAnim, slideAnim1} from './anim-util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [

    SlideAnim('slideAnim2', '500px', '-500px', 500),

    slideAnim1,

    trigger('FlyInAnim1', [
      state('specific', // NOTE: whatever reasons, can't use * here
        style({ opacity: 1, transform: 'translateX(10%)' })), // NOTE: final positions(overrid CSS)
      transition(':enter',
        animate('5s ease-out')), // NOTE: must be longer than initial page load to show up
      transition(':leave', animate('2s ease-in',
        style({ opacity: 0, marginLeft: '100%' })))
    ]),
  ]
})

export class HomeComponent implements OnInit {
  constructor() { }

  xxx = 'specific'; yyy = 'from';

  ngOnInit() {}
  toggleYYY() { if (this.yyy === 'to') { this.yyy = 'from'; } else { this.yyy = 'to'; } }
}

// transform: 'translateX(100%) scale(1.8) rotate(360deg)'
