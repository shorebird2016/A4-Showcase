"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var file_service_1 = require("../../tool/media/file.service");
var BadgeComponent = (function () {
    function BadgeComponent(file_svc) {
        this.file_svc = file_svc;
        this.filteredMembers = [];
        this.members = [];
        this.badImages = [];
        this.userIdEntry = '';
        this.lastNameEntry = '';
        this.firstNameEntry = '';
        // accessors
        this.getMemberType = function (member) {
            if (member.Type === 'Regular') {
                return 'REG';
            }
            else if (member.Type === 'Lifetime') {
                return 'LT';
            }
            else {
                return 'ICT';
            }
        };
        this.getLocation = function (member) { return member.Location; };
    }
    BadgeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.file_svc.getJsonFile('assets/badge/members.json').subscribe(function (res) {
            var payload = res.json();
            console.log(payload);
            _this.members = payload;
            for (var idx = 0; idx < _this.members.length; idx++) {
                _this.members[idx].Image = _this.members[idx].ID;
            }
            _this.filteredMembers = _this.members;
        });
    };
    BadgeComponent.prototype.clearEntryFields = function () {
        this.userIdEntry = '';
        this.firstNameEntry = '';
        this.lastNameEntry = '';
    };
    // filter records based on user selections
    BadgeComponent.prototype.filter = function (user_choice) {
        var type = null;
        var loc = null;
        switch (user_choice) {
            case 0:
                this.filteredMembers = this.members;
                return;
            // 1~3 based on type
            case 1:
                type = 'Regular';
                break;
            case 2:
                type = 'Lifetime';
                break;
            case 3:
                type = 'Inner Circle';
                break;
            // 10~30 query for locations
            case 10:
                loc = 'Milbrae 1';
                break;
            case 11:
                loc = 'Milbrae 2';
                break;
            case 12:
                loc = 'Cupertino 1';
                break;
            case 13:
                loc = 'Cupertino 2';
                break;
            case 14:
                loc = 'Center';
                break;
            case 15:
                loc = 'HQ-BG';
                break;
            case 16:
                loc = 'Almaden';
                break;
            case 17:
                loc = 'Evergreen';
                break;
            case 18:
                loc = 'Milpitas';
                break;
            case 19:
                loc = 'Fremont 1';
                break;
            case 20:
                loc = 'Fremont 2';
                break;
            case 21:
                loc = 'San Jose';
                break;
            case 22:
                loc = 'Sunnyvale';
                break;
        }
        if (user_choice >= 1 && user_choice <= 3) {
            this.filteredMembers = this.findMembersByType(type);
        }
        else {
            this.filteredMembers = this.findMembersByLocation(loc);
        }
    };
    // to find members based on type and location, either arg maybe null (ignore)
    BadgeComponent.prototype.findMembersByType = function (type) {
        var ret = [];
        for (var idx = 0; idx < this.members.length; idx++) {
            if (type === this.members[idx].Type) {
                ret.push(this.members[idx]);
            }
        }
        return ret;
    };
    BadgeComponent.prototype.findMembersByLocation = function (location) {
        var ret = [];
        for (var idx = 0; idx < this.members.length; idx++) {
            if (location === this.members[idx].Location) {
                ret.push(this.members[idx]);
            }
        }
        return ret;
    };
    BadgeComponent.prototype.findMembersByIDFirstLast = function () {
        var ret = [];
        for (var idx = 0; idx < this.members.length; idx++) {
            var id_match = this.userIdEntry === '' || this.userIdEntry == this.members[idx].ID;
            var first_match = this.firstNameEntry === ''
                || this.firstNameEntry.toLowerCase() === this.members[idx].First.toLowerCase();
            var last_match = this.lastNameEntry === ''
                || this.lastNameEntry.toLowerCase() === this.members[idx].Last.toLowerCase();
            if (id_match && first_match && last_match) {
                ret.push(this.members[idx]);
            }
        }
        this.filteredMembers = ret;
    };
    // use global array to track member without photos
    BadgeComponent.prototype.markImage = function (mbr) {
        // console.log('..... No Image => ' + mbr.ID);
        mbr.Image = 'no-photo';
        this.badImages.push(mbr.ID);
    };
    return BadgeComponent;
}());
BadgeComponent = __decorate([
    core_1.Component({
        selector: 'app-badge',
        templateUrl: './badge.component.html',
        styleUrls: ['./badge.component.css'],
        providers: [file_service_1.FileService]
    })
], BadgeComponent);
exports.BadgeComponent = BadgeComponent;
