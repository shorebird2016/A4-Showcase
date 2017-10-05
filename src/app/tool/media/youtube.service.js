"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var YOUTUBE_SEARCH_ENDPOINT = 'https://www.googleapis.com/youtube/v3/search?';
var YOUTUBE_KEY = 'key=AIzaSyDHpYkujUq1TlNAqmYNtgoHAwa4rbj-tvE'; // from youtube credentials
var QUERY_PART = 'part=snippet&maxResults=20';
var QUERY_DIVIDER = '&';
var QUERY_Q = 'q=';
var QUERY_PAGE_TOKEN = 'pageToken=';
var YoutubeService = (function () {
    function YoutubeService(_http) {
        this._http = _http;
    }
    YoutubeService.prototype.searchVideo = function (search_string) {
        var url = YOUTUBE_SEARCH_ENDPOINT + QUERY_PART + QUERY_DIVIDER + YOUTUBE_KEY
            + QUERY_DIVIDER + QUERY_Q + search_string;
        return this._http.get(url);
    };
    return YoutubeService;
}());
YoutubeService = __decorate([
    core_1.Injectable()
], YoutubeService);
exports.YoutubeService = YoutubeService;
