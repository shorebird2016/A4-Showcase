"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var json_test_service_1 = require("../../../tool/json-test.service");
var JsonTestComponent = (function () {
    function JsonTestComponent(test_svc) {
        this.test_svc = test_svc;
    }
    JsonTestComponent.prototype.ngOnInit = function () { };
    JsonTestComponent.prototype.testIpService = function () {
        var _this = this;
        this.test_svc.testIpService().subscribe(function (res) {
            var payload = res.json();
            console.log(payload);
            _this.IPresponse = payload;
        });
    };
    JsonTestComponent.prototype.getIpResponse = function () { return this.IPresponse ? this.IPresponse.ip : ''; };
    JsonTestComponent.prototype.testDateService = function () {
        var _this = this;
        this.test_svc.testDateService().subscribe(function (res) {
            var payload = res.json();
            console.log(payload);
            _this.dateResponse = payload;
        });
    };
    JsonTestComponent.prototype.getDateResponse = function () { return this.dateResponse ? this.dateResponse.date : ''; };
    JsonTestComponent.prototype.testTimeService = function () {
        var _this = this;
        this.test_svc.testTimeService().subscribe(function (res) {
            var payload = res.json();
            console.log(payload);
            _this.timeResponse = payload;
        });
    };
    JsonTestComponent.prototype.getTimeResponse = function () { return this.timeResponse ? this.timeResponse.time + ' (GMT)' : ''; };
    JsonTestComponent.prototype.testEchoService = function () {
        var _this = this;
        this.test_svc.testEchoService('Hello', 'World')
            .subscribe(function (res) {
            var payload = res.json();
            console.log(payload);
            _this.echoResponse = payload;
        });
    };
    JsonTestComponent.prototype.getEchoResponse = function () { return this.echoResponse ? this.echoResponse : ''; };
    JsonTestComponent.prototype.testHederService = function () {
        var _this = this;
        this.test_svc.testHeaderService().subscribe(function (res) {
            var payload = res.json();
            console.log(payload);
            _this.headerResponse = payload;
        });
    };
    JsonTestComponent.prototype.getHeaderResponse = function () { return this.headerResponse ? this.headerResponse.Accept : ''; };
    return JsonTestComponent;
}());
JsonTestComponent = __decorate([
    core_1.Component({
        selector: 'app-json-test',
        templateUrl: './json-test.component.html',
        styleUrls: ['./json-test.component.css'],
        providers: [json_test_service_1.JsonTestService]
    })
], JsonTestComponent);
exports.JsonTestComponent = JsonTestComponent;
