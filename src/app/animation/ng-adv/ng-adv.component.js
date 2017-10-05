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
var NgAdvComponent = (function () {
    function NgAdvComponent() {
    }
    NgAdvComponent.prototype.ngOnInit = function () {
        this.items = ['The first item', 'The Next awesome item', 'Third funny item'];
    };
    NgAdvComponent.prototype.pushItem = function () { this.items.push('Yet another wonderful item'); };
    NgAdvComponent.prototype.removeItem = function () { this.items.pop(); };
    return NgAdvComponent;
}());
NgAdvComponent = __decorate([
    core_1.Component({
        selector: 'app-ng-adv',
        templateUrl: './ng-adv.component.html',
        styleUrls: ['./ng-adv.component.css'],
        animations: [
            animations_1.trigger('listAnimation', [
                animations_1.transition('* => *', [
                    animations_1.query(':enter', animations_1.style({ opacity: 0 }), { optional: true }),
                    animations_1.query(':enter', animations_1.stagger('300ms', [
                        animations_1.animate('1s ease-in', animations_1.keyframes([
                            animations_1.style({ opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
                            animations_1.style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
                            animations_1.style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                        ]))
                    ]), { optional: true }),
                    animations_1.query(':leave', animations_1.stagger('300ms', [
                        animations_1.animate('1s ease-in', animations_1.keyframes([
                            animations_1.style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                            animations_1.style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
                            animations_1.style({ opacity: 0, transform: 'translateY(-75px)', offset: 1 }),
                        ]))
                    ]), { optional: true }),
                ])
            ]),
            animations_1.trigger('explainerAnim', [
                animations_1.transition('* => *', [
                    animations_1.query('.col', animations_1.style({ opacity: 0, transform: 'translateX(-40px)' })),
                    animations_1.query('.col', animations_1.stagger('500ms', [
                        animations_1.animate('800ms 1.2s ease-out', animations_1.style({ opacity: 0, tarnsform: 'translateX(0)' }))
                    ]))
                ])
            ])
        ]
    })
], NgAdvComponent);
exports.NgAdvComponent = NgAdvComponent;
