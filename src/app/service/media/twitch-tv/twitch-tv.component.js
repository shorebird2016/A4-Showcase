"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var twitch_service_1 = require("../../../tool/media/twitch.service");
var TwitchTvComponent = (function () {
    function TwitchTvComponent(tw_svc) {
        this.tw_svc = tw_svc;
        this.keyword = 'star trek';
        this.channels = [];
        this.liveStreams = [];
        this.getVideoBannerUrl = function (index) {
            var banner_url = this.channels[index].video_banner;
            if (banner_url === null) {
                banner_url = this.channels[index].profile_banner;
                if (banner_url == null) {
                    return '../assets/twitch/channel-offline.png';
                }
            }
            return banner_url;
        };
        this.getLogoUrl = function (index) {
            var logo_url = this.channels[index].logo;
            if (logo_url === null) {
                return '../assets/twitch/channel-offline.png'; // 'http://placehold.it/300x300';
            }
            else {
                return logo_url;
            }
        };
        this.getProfileBanner = function (index) {
            var profile_banner_url = this.channels[index].profile_banner;
            if (profile_banner_url === null) {
                return 'http://placehold.it/200x100';
            }
            else {
                return profile_banner_url;
            }
        };
        // --make request to get channel details by id
        this.getChannelInfo = function (index) {
            var _this = this;
            var channel_id = this.channels[index]._id;
            this.tw_svc.getChannel(channel_id).subscribe(function (res) {
                var payload = res.json();
                _this.curChannel = payload.data;
            }, function (err) {
                console.log(err);
            });
        };
        // --obtain live streams (on-air channels)
        this.getLiveStreams = function () {
            var _this = this;
            this.liveStreams = [];
            this.channels = []; // clear view
            this.tw_svc.getLiveStreams().subscribe(function (res) {
                var payload = res.json();
                _this.liveStreams = payload.data.streams;
                console.log(payload);
                console.log(_this.liveStreams);
                // copy live list to this.channels (they have different structure) for display
                _this.liveStreams.forEach(function (element) {
                    this.channels.push(element.channel);
                });
            }, function (err) {
                console.log(err);
            });
        };
    }
    TwitchTvComponent.prototype.ngOnInit = function () { this.getTvChannels(); this.keyword = ''; };
    TwitchTvComponent.prototype.getTvChannels = function () {
        var _this = this;
        this.tw_svc.getTwitchChannels(this.keyword).subscribe(function (res) {
            var payload = res.json();
            console.log(payload);
            _this.channels = payload.channels;
        }, function (err) {
            console.log(err);
        });
    };
    return TwitchTvComponent;
}());
TwitchTvComponent = __decorate([
    core_1.Component({
        selector: 'app-twitch-tv',
        templateUrl: './twitch-tv.component.html',
        styleUrls: ['./twitch-tv.component.css'],
        providers: [twitch_service_1.TwitchService]
    })
], TwitchTvComponent);
exports.TwitchTvComponent = TwitchTvComponent;
