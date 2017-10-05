"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var TWITCH_CLIENT_ID = 'rymre0n35hkn2bs6me2go85c4uabhz'; // if this is wrong, will get 'Bad Request' 400
var TWITCH_ENDPOINT_SEARCH = 'https://api.twitch.tv/kraken/search/';
var TWITCH_ENDPOINT_CHANNELS = 'https://api.twitch.tv/kraken/channels/';
var TWITCH_ENDPOINT_LIVE_STREAMS = 'https://api.twitch.tv/kraken/streams/';
var TwitchService = (function () {
    function TwitchService(_http) {
        this._http = _http;
    }
    TwitchService.prototype.getTwitchChannels = function (keyword) {
        var url = TWITCH_ENDPOINT_SEARCH + 'channels?query=' + keyword + '&limit=10';
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/vnd.twitchtv.v5+json');
        headers.append('Client-ID', TWITCH_CLIENT_ID);
        var opts = new http_1.RequestOptions();
        opts.headers = headers;
        return this._http.get(url, opts);
    };
    TwitchService.prototype.getChannel = function (channel_id) {
        var channel_url = TWITCH_ENDPOINT_CHANNELS + channel_id;
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/vnd.twitchtv.v5+json');
        headers.append('Client-ID', TWITCH_CLIENT_ID);
        var opts = new http_1.RequestOptions();
        opts.headers = headers;
        return this._http.get(channel_url, opts);
    };
    TwitchService.prototype.getLiveStreams = function () {
        var ls_url = TWITCH_ENDPOINT_LIVE_STREAMS;
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/vnd.twitchtv.v5+json');
        headers.append('Client-ID', TWITCH_CLIENT_ID);
        var opts = new http_1.RequestOptions();
        opts.headers = headers;
        return this._http.get(ls_url, opts);
    };
    return TwitchService;
}());
TwitchService = __decorate([
    core_1.Injectable()
], TwitchService);
exports.TwitchService = TwitchService;
