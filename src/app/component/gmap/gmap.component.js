"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GmapComponent = (function () {
    function GmapComponent() {
        this.latitude = 37.3336357; // 51.678418  cupertino
        this.longitude = -122.0447116; // 7.809007
        this.zoomLevel = 13;
        this.mapStyles = [
            { 'featureType': 'water', 'stylers': [{ 'color': '#9ed7ff' }] },
            // { 'featureType': 'road',  'elementType': 'geometry', 'stylers': [{'hue': '#ddc47a'}, {'gamma': 3.1 }] },
            { 'featureType': 'poi.park', 'stylers': [{ 'hue': '#0c1808' }, { 'saturation': -23 }] }
        ];
    }
    GmapComponent.prototype.ngOnInit = function () {
    };
    GmapComponent.prototype.autoCompleteDone = function (selected_data) {
        console.log('AutoComplete ==> ', selected_data);
        this.latitude = selected_data.geometry.location.lat;
        this.longitude = selected_data.geometry.location.lng;
    };
    return GmapComponent;
}());
GmapComponent = __decorate([
    core_1.Component({
        selector: 'app-gmap',
        templateUrl: './gmap.component.html',
        styleUrls: ['./gmap.component.css']
    })
], GmapComponent);
exports.GmapComponent = GmapComponent;
