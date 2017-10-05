"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BasicDirective = (function () {
    function BasicDirective(elem) {
        this.elem = elem;
    }
    BasicDirective.prototype.onmouseEnter = function () { this.highlight(this.appHoverColor); };
    BasicDirective.prototype.onmouseLeave = function () { this.highlight(this.leaveColor); };
    BasicDirective.prototype.highlight = function (color) {
        this.elem.nativeElement.style.backgroundColor = color;
    };
    return BasicDirective;
}());
__decorate([
    core_1.Input()
], BasicDirective.prototype, "leaveColor", void 0);
__decorate([
    core_1.Input()
], BasicDirective.prototype, "appHoverColor", void 0);
__decorate([
    core_1.HostListener('mouseenter')
], BasicDirective.prototype, "onmouseEnter", null);
__decorate([
    core_1.HostListener('mouseleave')
], BasicDirective.prototype, "onmouseLeave", null);
BasicDirective = __decorate([
    core_1.Directive({
        selector: '[appHoverColor]'
    })
], BasicDirective);
exports.BasicDirective = BasicDirective;
