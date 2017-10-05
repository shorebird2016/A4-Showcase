"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CssAdvComponent = (function () {
    function CssAdvComponent() {
        this.idle = true;
    }
    CssAdvComponent.prototype.ngOnInit = function () {
    };
    CssAdvComponent.prototype.showWelcome = function () {
        // remove hidden class and triggers transition on fly-in element
        setTimeout(function () {
            this.idle = !this.idle; // TODO this does not represent class context here
        }, 1000);
    };
    return CssAdvComponent;
}());
CssAdvComponent = __decorate([
    core_1.Component({
        selector: 'app-css-adv',
        templateUrl: './css-adv.component.html',
        styleUrls: ['./css-adv.component.css']
    })
], CssAdvComponent);
exports.CssAdvComponent = CssAdvComponent;
