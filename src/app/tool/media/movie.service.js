"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ENDPOINT_OMDB = 'http://www.omdbapi.com/'; // open move database
var SEARCH = 's=';
var FORMAT = 'r=json';
var API_KEY = 'apikey=db400b0a';
var MovieService = (function () {
    function MovieService(_http) {
        this._http = _http;
    }
    MovieService.prototype.getMovie = function (search_term) {
        var url = ENDPOINT_OMDB + '?' + SEARCH + search_term + '&' + FORMAT + '&' + API_KEY;
        return this._http.get(url);
    };
    return MovieService;
}());
MovieService = __decorate([
    core_1.Injectable()
], MovieService);
exports.MovieService = MovieService;
