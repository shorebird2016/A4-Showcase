"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var wiki_service_1 = require("../../../tool/info/wiki.service");
var WikiComponent = (function () {
    function WikiComponent(wiki_svc) {
        this.wiki_svc = wiki_svc;
    }
    WikiComponent.prototype.ngOnInit = function () {
    };
    WikiComponent.prototype.search = function () {
        var _this = this;
        this.wiki_svc.searchByKeyword(this.userEntry).subscribe(function (res) {
            var payload = res.json();
            console.log(payload);
            _this.searchResults = payload;
            // return 4 elements in an array, first element is the search term
            // 2nd element - array of result names (default 10)
            _this.names = _this.searchResults[1];
            // 3rd element - array of matching result description
            _this.descriptions = _this.searchResults[2];
            // 4th element - links to each
            _this.links = _this.searchResults[3];
        });
    };
    return WikiComponent;
}());
WikiComponent = __decorate([
    core_1.Component({
        selector: 'app-wiki',
        templateUrl: './wiki.component.html',
        styleUrls: ['./wiki.component.css'],
        providers: [wiki_service_1.WikiService]
    })
], WikiComponent);
exports.WikiComponent = WikiComponent;
