"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// const ENDPOINT_FLICKR = 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos';
var ENDPOINT_FLICKR = 'https://api.flickr.com/services/rest/';
var METHOD_PUBLIC_PHOTOS = '?method=flickr.people.getPublicPhotos';
var METHOD_SEARCH = '?method=flickr.photos.search';
var API_KEY = 'a5e95177da353f58113fd60296e1d250';
var USER_ID = '24662369@N07';
var FORMAT = '&format=json&nojsoncallback=1';
var PAGE = '&page=';
var TAGS = '&tags=';
var OPTIONS = FORMAT + PAGE;
var FlickrService = (function () {
    function FlickrService(_http) {
        this._http = _http;
    }
    FlickrService.prototype.getDefaultPhotos = function () {
        var url = ENDPOINT_FLICKR + METHOD_PUBLIC_PHOTOS + '&api_key=' + API_KEY + '&user_id=' + USER_ID + OPTIONS + 1;
        return this._http.get(url);
    };
    FlickrService.prototype.getMorePhotos = function (page_number) {
        var url = ENDPOINT_FLICKR + '&api_key=' + API_KEY + '&user_id=' + USER_ID + OPTIONS + page_number;
        return this._http.get(url);
    };
    FlickrService.prototype.searchPhotos = function (search_term) {
        var url = ENDPOINT_FLICKR + METHOD_SEARCH + '&api_key=' + API_KEY + '&user_id='
            + USER_ID + FORMAT + TAGS + search_term;
        return this._http.get(url);
    };
    return FlickrService;
}());
FlickrService = __decorate([
    core_1.Injectable()
], FlickrService);
exports.FlickrService = FlickrService;
