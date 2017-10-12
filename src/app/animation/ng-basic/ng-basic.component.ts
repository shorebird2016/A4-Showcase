import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger, keyframes, group} from '@angular/animations';

@Component({
  selector: 'app-ng-basic',
  templateUrl: './ng-basic.component.html',
  styleUrls: ['./ng-basic.component.css'],
  animations: [
    trigger('morph', [
      state('loaded-state', style({ color: 'purple', width: '350px', height: '80px',
        border: '10px solid skyblue', borderRadius: '70%', fontSize: '2em',
        transform: 'translate(100%, 50%)', marginBottom: '50px' })),
      transition('void => *', animate('5s ease-in-out'))
    ]),

    trigger('bigAndSmall', [
      state('small', style({ transform: 'scale(0.7)' })),
      state('big', style({ transform: 'scale(1.5)' })),
      transition('small <=> big', animate('1000ms linear'))
    ]),

    trigger('showAndHide', [
        state('visible', style( { opacity: 1 })),
        state('hidden', style( { opacity: 0 })),
        transition('visible <=> hidden', animate('800ms linear'))
      ]),

    trigger('tipSter', [
      state('on', style({ display: 'block', transform: 'translateX(150%)', offset: 0 })),
      state('off', style({ display: 'none' })),
      transition('off <=> on', animate('1000ms ease-out'))
    ]),

    trigger('moveBall', [
      state('loc-1', style({transform: 'translate(0, 0)' })),
      state('loc-2', style({transform: 'translate(0, 0) scale(2.5)' })),

      transition('* <=> *', animate('2000ms ease-in', keyframes([
        style({ opacity: 0, offset: 0 }),
        style({ opacity: 0.4, transform: 'translate(160px, 5px) scale(1)', offset: 0.2 }),
        style({ opacity: 0.6, transform: 'translate(180px, 40px) scale(1.3)', offset: 0.3 }),
        style({ opacity: 0.7, transform: 'translate(160px, 80px) scale(1.5)', offset: 0.5 }),
        style({ opacity: 0.8, transform: 'translate(90px, 80px) scale(1.9)', offset: 0.7 }),
        style({ opacity: 1,   transform: 'translate(0px, 40px) scale(2.1)', offset: 0.9 }),
        style({ opacity: 1,   transform: 'translate(0px, 0px) scale(2.5)', offset: 1.0 }),
      ])))
    ]),

    trigger('carRaceLeft', [
      state('begin', style({})),
      state('end', style({transform: 'translateX(600%)'})),
      transition('begin <=> end', animate('2500ms ease-out'))
    ]),

    trigger('carRaceRite', [
      state('begin', style({})),
      state('end', style({transform: 'translateX(-600%)'})),
      transition('begin <=> end', animate('3000ms ease-in'))
    ]),

    trigger('crudAnim', [
      transition('void => *', animate('350ms ease-in'), keyframes([
        style({ transform: 'translateX(-100%)', offset: 0 }),
        style({ transform: 'translateX(-80%)', offset: 0.25 }),
        style({ transform: 'translateX(-50%)', offset: 0.5 }),
        style({ transform: 'translateX(-20%)', offset: 0.75 }),
        style({ transform: 'translateX(0%)', offset: 1 }),
      ]))
    ]),

    trigger('itemAnim', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate(350)
      ]),
      transition(':leave', [
        group([
          animate('0.2s ease', style({
            transform: 'translate(150px,25px)'
          })),
          animate('0.5s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])

  ]
})

export class NgBasicComponent implements OnInit {
  animFlag = 'loaded-state';
  transitionState = 'small';
  visibility = 'visible';
  showTip = 'off';
  ballState = 'loc-1';
  carStateLeft = 'begin';
  carStateRite = 'begin';
  list = [];
  item;

  ngOnInit() {
  }

  startRace() {
    if (this.carStateLeft === 'end') {
      this.carStateLeft = 'begin';
    } else {
      this.carStateLeft = 'end';
    }
    if (this.carStateRite === 'end') {
      this.carStateRite = 'begin';
    } else {
      this.carStateRite = 'end';
    }
    this.moveBall();
  }

  toggle() {
    this.transitionState === 'small' ? this.transitionState = 'big' : this.transitionState = 'small';
  }

  hideButton() {
    this.visibility = 'hidden';
  }

  showButton() {
    this.visibility = 'visible';
  }

  showHideTip(show_tip) {
    this.showTip = show_tip;
  }

  moveBall() {
    if (this.ballState === 'loc-1') {
      this.ballState = 'loc-2';
    } else {
      this.ballState = 'loc-1';
    }
  }

  addItem() {
    this.list.push(this.item);
  }

  removeItem() {
    this.list.pop();
  }
}

