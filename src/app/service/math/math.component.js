"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var math_service_1 = require("../../tool/app/math.service");
var MathComponent = (function () {
    function MathComponent(math_svc) {
        this.math_svc = math_svc;
    }
    MathComponent.prototype.ngOnInit = function () {
    };
    MathComponent.prototype.addNumbers = function () { return this.math_svc.add(this.operand1, this.operand2); };
    MathComponent.prototype.subtractNumbers = function () { return this.math_svc.subtract(this.operand3, this.operand4); };
    MathComponent.prototype.multiplyNumbers = function () { return this.math_svc.multiply(this.operand5, this.operand6); };
    MathComponent.prototype.divideNumbers = function () { return this.math_svc.divide(this.operand7, this.operand8); };
    return MathComponent;
}());
MathComponent = __decorate([
    core_1.Component({
        selector: 'app-math',
        templateUrl: './math.component.html',
        styleUrls: ['./math.component.css'],
        providers: [math_service_1.MathService]
    })
], MathComponent);
exports.MathComponent = MathComponent;
