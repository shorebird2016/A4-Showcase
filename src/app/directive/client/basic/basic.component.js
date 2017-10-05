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
var BasicComponent = (function () {
    function BasicComponent() {
        this.visibility = 'visible';
        this.size = 'narrow';
    }
    BasicComponent.prototype.ngOnInit = function () {
    };
    BasicComponent.prototype.animateVisibility = function () {
        this.visibility === 'visible' ? this.visibility = 'hidden' : this.visibility = 'visible';
    };
    BasicComponent.prototype.toggleSize = function () {
        this.size === 'narrow' ? this.size = 'wide' : this.size = 'narrow';
    };
    return BasicComponent;
}());
BasicComponent = __decorate([
    core_1.Component({
        selector: 'app-basic',
        templateUrl: './basic.component.html',
        styleUrls: ['./basic.component.css'],
        animations: [
            animations_1.trigger('showHide', [
                animations_1.state('visible', animations_1.style({ opacity: 1 })),
                animations_1.state('hidden', animations_1.style({ opacity: 0.1 })),
                animations_1.transition('visible <=> hidden', animations_1.animate('500ms linear'))
            ]),
            animations_1.trigger('sizing', [
                animations_1.state('narrow', animations_1.style({ width: '200px' })),
                animations_1.state('wide', animations_1.style({ width: '400px' })),
                animations_1.transition('narrow <=> wide', animations_1.animate('500ms ease-out'))
            ])
        ]
    })
], BasicComponent);
exports.BasicComponent = BasicComponent;
