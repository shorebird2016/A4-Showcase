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
var NgBasicComponent = (function () {
    function NgBasicComponent() {
        this.transitionState = 'small';
        this.visibility = 'visible';
        this.showTip = 'off';
        this.carStateLeft = 'begin';
        this.carStateRite = 'begin';
    }
    NgBasicComponent.prototype.ngOnInit = function () { };
    NgBasicComponent.prototype.startRace = function () {
        if (this.carStateLeft === 'end') {
            this.carStateLeft = 'begin';
        }
        else {
            this.carStateLeft = 'end';
        }
        if (this.carStateRite === 'end') {
            this.carStateRite = 'begin';
        }
        else {
            this.carStateRite = 'end';
        }
    };
    NgBasicComponent.prototype.toggle = function () {
        this.transitionState === 'small' ? this.transitionState = 'big' : this.transitionState = 'small';
    };
    NgBasicComponent.prototype.hideButton = function () { this.visibility = 'hidden'; };
    NgBasicComponent.prototype.showButton = function () { this.visibility = 'show'; };
    NgBasicComponent.prototype.showHideTip = function (show_tip) {
        this.showTip = show_tip;
        if (this.showTip === 'on') {
            this.moveBall();
        }
    };
    NgBasicComponent.prototype.moveBall = function () {
        if (this.ballState === 'loc-1') {
            this.ballState = 'loc-2';
        }
        else {
            this.ballState = 'loc-1';
        }
        // this.ballPosition++;
        // if (this.ballPosition === 6) {
        //   this.ballPosition = 1;
        // }
        // this.ballState = 'loc-' + this.ballPosition;
        // console.log(this.ballState);
    };
    return NgBasicComponent;
}());
NgBasicComponent = __decorate([
    core_1.Component({
        selector: 'app-ng-basic',
        templateUrl: './ng-basic.component.html',
        styleUrls: ['./ng-basic.component.css'],
        animations: [
            animations_1.trigger('morph', [
                animations_1.transition('void => *', animations_1.animate('1000ms ease'))
            ]),
            animations_1.trigger('bigAndSmall', [
                animations_1.state('small', animations_1.style({ transform: 'scale(0.7)' })),
                animations_1.state('big', animations_1.style({ transform: 'scale(1.2)' })),
                animations_1.transition('small <=> big', animations_1.animate('1000ms linear'))
            ]),
            animations_1.trigger('showAndHide', [
                animations_1.state('visible', animations_1.style({ opacity: 1 })),
                animations_1.state('hidden', animations_1.style({ opacity: 0 })),
                animations_1.transition('visible <=> hidden', animations_1.animate('500ms linear'))
            ]),
            animations_1.trigger('tipSter', [
                animations_1.state('on', animations_1.style({ display: 'block', transform: 'translateX(150%)', offset: 0 })),
                animations_1.state('off', animations_1.style({ display: 'none' })),
                animations_1.transition('off <=> on', animations_1.animate('1000ms ease-out'))
            ]),
            animations_1.trigger('moveBall', [
                animations_1.state('loc-1', animations_1.style({ transform: 'translate3d(35px, 0, 0)', backgroundColor: 'magenta' })),
                animations_1.state('loc-2', animations_1.style({ transform: 'translate3d(80px, 40px, 0)', backgroundColor: 'orange' })),
                animations_1.transition('loc-1 <=> loc-2', animations_1.animate('2000ms ease-in', animations_1.keyframes([
                    animations_1.style({ opacity: 0, offset: 0 }),
                    animations_1.style({ opacity: 0.4, transform: 'translateX(60px) translateY(30px)', offset: 0.2 }),
                    animations_1.style({ opacity: 0.6, transform: 'translateX(90px) translateY(65px)', offset: 0.4 }),
                    animations_1.style({ opacity: 0.7, transform: 'translateX(70px) translateY(90px)', offset: 0.6 }),
                    animations_1.style({ opacity: 0.8, transform: 'translateX(30px) translateY(65px)', offset: 0.8 }),
                    animations_1.style({ opacity: 1, transform: 'translateX(5px) translateY(90px)', offset: 1.0 }),
                ])))
            ]),
            animations_1.trigger('carRaceLeft', [
                animations_1.state('begin', animations_1.style({})),
                animations_1.state('end', animations_1.style({ transform: 'translateX(600%)' })),
                animations_1.transition('begin <=> end', animations_1.animate('2500ms ease-out'))
            ]),
            animations_1.trigger('carRaceRite', [
                animations_1.state('begin', animations_1.style({})),
                animations_1.state('end', animations_1.style({ transform: 'translateX(-600%)' })),
                animations_1.transition('begin <=> end', animations_1.animate('3000ms ease-in'))
            ])
        ]
    })
], NgBasicComponent);
exports.NgBasicComponent = NgBasicComponent;
