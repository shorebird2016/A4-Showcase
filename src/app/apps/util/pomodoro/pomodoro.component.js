"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var PomodoroComponent = (function () {
    function PomodoroComponent() {
        this.countDown = '00:00';
        this.sessionTime = 25;
        this.breakTime = 5;
        this.remainingTime = this.sessionTime * 60;
        this.inSession = true;
        this.paused = true;
        this.startStopFace = 'start-timer';
        this.buttonState = 'small';
        this.gateState = 'stationary';
    }
    PomodoroComponent.prototype.ngOnInit = function () { };
    PomodoroComponent.prototype.pauseResume = function () {
        var _this = this;
        // animation - toggle button size, rotate stargate
        this.buttonState = (this.buttonState === 'small' ? 'large' : 'small');
        this.gateState = (this.gateState === 'stationary') ? 'rotating' : 'stationary';
        if (this.paused) {
            this.startStopFace = 'stop-timer';
            this.paused = false;
            this.timerId = setInterval(function () {
                _this.remainingTime--;
                // convert total time to 4 digit string, update clock
                var min = Math.floor(_this.remainingTime / 60);
                var sec = Math.floor(_this.remainingTime % 60);
                _this.countDown = min + ':' + sec;
                if (_this.remainingTime === 0) {
                    if (_this.inSession) {
                        _this.remainingTime = _this.breakTime * 60;
                        _this.inSession = false;
                        // play a sound
                        var audio1 = new Audio('../assets/pomodoro/beep1.wav');
                        audio1.play();
                    }
                    else {
                        _this.remainingTime = _this.sessionTime * 60;
                        _this.inSession = true;
                        var audio2 = new Audio('../assets/pomodoro/beep2.wav');
                        audio2.play();
                    }
                    min = Math.floor(_this.remainingTime / 60);
                    _this.countDown = min + ':00';
                }
            }, 1000);
        }
        else {
            this.paused = true;
            clearInterval(this.timerId);
            this.startStopFace = 'start-timer';
        }
    };
    PomodoroComponent.prototype.incSession = function () {
        if (this.sessionTime > 100) {
            return;
        }
        this.sessionTime++;
        if (this.inSession) {
            this.remainingTime = this.sessionTime * 60;
        }
    };
    PomodoroComponent.prototype.decSession = function () {
        if (this.sessionTime === 1) {
            return;
        }
        this.sessionTime--;
        if (this.inSession) {
            this.remainingTime = this.sessionTime * 60;
        }
    };
    PomodoroComponent.prototype.incBreak = function () {
        if (this.breakTime > 10) {
            return;
        }
        this.breakTime++;
        if (!this.inSession) {
            this.remainingTime = this.breakTime * 60;
        }
    };
    PomodoroComponent.prototype.decBreak = function () {
        if (this.breakTime === 1) {
            return;
        }
        this.breakTime--;
        if (!this.inSession) {
            this.remainingTime = this.breakTime * 60;
        }
    };
    return PomodoroComponent;
}());
PomodoroComponent = __decorate([
    core_1.Component({
        selector: 'app-pomodoro',
        templateUrl: './pomodoro.component.html',
        styleUrls: ['./pomodoro.component.css'],
        animations: [animations_1.trigger('changeButtonSize', [
                animations_1.state('small', animations_1.style({ transform: 'scale(1)' })),
                animations_1.state('large', animations_1.style({ transform: 'scale(2)' })),
                animations_1.transition('small => large', animations_1.animate('200ms ease-in'))
            ]),
            animations_1.trigger('rotateGate', [
                animations_1.state('stationary', animations_1.style({ transform: 'rotate(0deg)' })),
                animations_1.state('rotating', animations_1.style({ transform: 'rotate(360deg)' })),
                animations_1.transition('stationary => rotating', animations_1.animate('1000s linear'))
            ])
        ]
    })
], PomodoroComponent);
exports.PomodoroComponent = PomodoroComponent;
