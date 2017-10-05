import {Component, OnInit } from '@angular/core';
import {state, trigger, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css'],
  animations: [ trigger('changeButtonSize', [
    state('small', style({ transform: 'scale(1)' })),
    state('large', style({ transform: 'scale(2)' })),
    transition('small => large', animate('200ms ease-in'))
    ]),
    trigger('rotateGate', [
      state('stationary', style( { transform: 'rotate(0deg)' })),
      state('rotating', style( { transform: 'rotate(360deg)' })),
      transition('stationary => rotating', animate('1000s linear'))
    ])
  ]
})
export class PomodoroComponent implements OnInit {
  constructor() { }
  countDown = '00:00';
  sessionTime = 25;
  breakTime = 5;
  remainingTime = this.sessionTime * 60;
  inSession = true;
  paused = true;
  startStopFace = 'start-timer';
  timerId;
  buttonState = 'small';
  gateState = 'stationary';

  ngOnInit() {}

  pauseResume() {
    // animation - toggle button size, rotate stargate
    this.buttonState = (this.buttonState === 'small' ? 'large' : 'small');
    this.gateState = (this.gateState === 'stationary') ? 'rotating' : 'stationary';

    if (this.paused) { // resume

      this.startStopFace = 'stop-timer';
      this.paused = false;
      this.timerId = setInterval(() => {
        this.remainingTime--;

        // convert total time to 4 digit string, update clock
        let min = Math.floor(this.remainingTime / 60);
        const sec = Math.floor(this.remainingTime % 60);
        this.countDown = min + ':' + sec;
        if (this.remainingTime === 0) { // count to 0, continue on the other one
          if (this.inSession) { // was in session
            this.remainingTime = this.breakTime * 60;
            this.inSession = false;
            // play a sound
            const audio1 = new Audio('../assets/pomodoro/beep1.wav');
            audio1.play();
          } else { // was in break
            this.remainingTime = this.sessionTime * 60;
            this.inSession = true;
            const audio2 = new Audio('../assets/pomodoro/beep2.wav');
            audio2.play();
          }
          min = Math.floor(this.remainingTime / 60);
          this.countDown = min + ':00';
        }
      }, 1000);
    } else { // currently running, stop timer
      this.paused = true;
      clearInterval(this.timerId);
      this.startStopFace = 'start-timer';
    }
  }
  incSession() {
    if (this.sessionTime > 100) { return; }
    this.sessionTime++;
    if (this.inSession) { this.remainingTime = this.sessionTime * 60; }
  }
  decSession() {
    if (this.sessionTime === 1) { return; }
    this.sessionTime--;
    if (this.inSession) { this.remainingTime = this.sessionTime * 60; }
  }
  incBreak() {
    if (this.breakTime > 10) { return; }
    this.breakTime++;
    if (!this.inSession) { this.remainingTime = this.breakTime * 60; }
  }
  decBreak() {
    if (this.breakTime === 1) { return; }
    this.breakTime--;
    if (!this.inSession) { this.remainingTime = this.breakTime * 60; }
  }

}
