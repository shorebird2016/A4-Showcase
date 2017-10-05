"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var geobytes_service_1 = require("../../../tool/geo/geobytes.service");
var GeobytesComponent = (function () {
    function GeobytesComponent(gb_svc) {
        this.gb_svc = gb_svc;
    }
    GeobytesComponent.prototype.ngOnInit = function () {
    };
    GeobytesComponent.prototype.getAutoCompleteCities = function () {
        var _this = this;
        this.gb_svc.autoCompleteCity(this.term).subscribe(function (res) {
            var payload = res.json();
            console.log(payload);
            _this.cityList = payload;
        });
        this.term = '';
    };
    return GeobytesComponent;
}());
GeobytesComponent = __decorate([
    core_1.Component({
        selector: 'app-geobytes',
        templateUrl: './geobytes.component.html',
        styleUrls: ['./geobytes.component.css'],
        providers: [geobytes_service_1.GeobytesService]
    })
], GeobytesComponent);
exports.GeobytesComponent = GeobytesComponent;
