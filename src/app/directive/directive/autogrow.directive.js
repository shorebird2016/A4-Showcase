"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AutogrowDirective = (function () {
    function AutogrowDirective(elem, rndr) {
        this.elem = elem;
        this.rndr = rndr;
    }
    AutogrowDirective.prototype.focus = function () {
        this.rndr.setElementClass(this.elem.nativeElement, 'focus', true);
    };
    AutogrowDirective.prototype.blur = function () {
        this.rndr.setElementClass(this.elem.nativeElement, 'focus', false);
    };
    return AutogrowDirective;
}());
__decorate([
    core_1.HostListener('focus')
], AutogrowDirective.prototype, "focus", null);
__decorate([
    core_1.HostListener('blur')
], AutogrowDirective.prototype, "blur", null);
AutogrowDirective = __decorate([
    core_1.Directive({
        selector: '[appAutogrow]'
    })
], AutogrowDirective);
exports.AutogrowDirective = AutogrowDirective;
