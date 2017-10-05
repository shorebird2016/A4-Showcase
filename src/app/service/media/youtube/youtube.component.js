"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var youtube_service_1 = require("../../../tool/media/youtube.service");
var YoutubeComponent = (function () {
    function YoutubeComponent(video_svc) {
        this.video_svc = video_svc;
        this.searchTerm = 'startrek film series';
        this.items = [];
    }
    YoutubeComponent.prototype.ngOnInit = function () { this.searchVideo(); this.searchTerm = ''; };
    YoutubeComponent.prototype.searchVideo = function () {
        var _this = this;
        this.video_svc.searchVideo(this.searchTerm)
            .subscribe(function (res) {
            var res_data = res.json(); // must parse raw response
            _this.items = res_data.items;
            console.log(_this.items[0]);
        });
    };
    YoutubeComponent.prototype.playVideo = function () { };
    return YoutubeComponent;
}());
YoutubeComponent = __decorate([
    core_1.Component({
        selector: 'app-youtube',
        templateUrl: './youtube.component.html',
        styleUrls: ['./youtube.component.css'],
        providers: [youtube_service_1.YoutubeService]
    })
], YoutubeComponent);
exports.YoutubeComponent = YoutubeComponent;
