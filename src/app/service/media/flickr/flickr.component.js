"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var flickr_service_1 = require("../../../tool/media/flickr.service");
var FlickrComponent = (function () {
    function FlickrComponent(_flickr_svc) {
        this._flickr_svc = _flickr_svc;
    }
    FlickrComponent.prototype.ngOnInit = function () {
        this.getDefaultPhotos();
    };
    FlickrComponent.prototype.getDefaultPhotos = function () {
        var _this = this;
        this._flickr_svc.getDefaultPhotos().subscribe(function (res) {
            var payload = res.json();
            console.log(payload);
            _this.photos = payload.photos.photo;
        });
    };
    // ---construct image url (Flickr protocol)
    FlickrComponent.prototype.getImageUrl = function (photo) {
        var farmId = photo.farm, server = photo.server, photoId = photo.id, secret = photo.secret;
        return 'https://farm' + farmId + '.staticflickr.com/' + server + '/' + photoId + '_' + secret + '.jpg';
    };
    FlickrComponent.prototype.searchImages = function () {
        var _this = this;
        this._flickr_svc.searchPhotos(this.searchTerm).subscribe(function (res) {
            var payload = res.json();
            console.log(payload);
            _this.photos = payload.photos.photo;
        });
    };
    return FlickrComponent;
}());
FlickrComponent = __decorate([
    core_1.Component({
        selector: 'app-flickr',
        templateUrl: './flickr.component.html',
        styleUrls: ['./flickr.component.css'],
        providers: [flickr_service_1.FlickrService]
    })
], FlickrComponent);
exports.FlickrComponent = FlickrComponent;
