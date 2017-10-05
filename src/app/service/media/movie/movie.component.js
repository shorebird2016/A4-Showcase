"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var movie_service_1 = require("../../../tool/media/movie.service");
var MovieComponent = (function () {
    function MovieComponent(_svc) {
        this._svc = _svc;
    }
    MovieComponent.prototype.ngOnInit = function () {
    };
    MovieComponent.prototype.getMovies = function () {
        var _this = this;
        this._svc.getMovie(this.searchTerm).subscribe(function (res) {
            var payload = res.json();
            console.log(payload);
            _this.movies = payload.Search;
        });
    };
    return MovieComponent;
}());
MovieComponent = __decorate([
    core_1.Component({
        selector: 'app-movie',
        templateUrl: './movie.component.html',
        styleUrls: ['./movie.component.css'],
        providers: [movie_service_1.MovieService]
    })
], MovieComponent);
exports.MovieComponent = MovieComponent;
