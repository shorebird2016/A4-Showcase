"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Blog1Component = (function () {
    function Blog1Component() {
        this.nameEntry = '';
        this.textEntry = '';
        this.blog = [
            // { submitter: 'CLUE', blogText: 'Blog from CLUE' },
            { submitter: 'ANNE DROID', blogText: 'Blog from ANNE' }
        ];
        this.submitPost = function () {
            var new_blog = {
                submitter: this.nameEntry,
                blogText: this.textEntry
            };
            this.blog.push(new_blog);
            this.nameEntry = '';
            this.textEntry = ''; // TODO this doesn't work somehow
        };
        this.removeBlog = function ($index) {
            this.blog.splice($index, 1);
        };
    }
    Blog1Component.prototype.ngOnInit = function () { };
    return Blog1Component;
}());
Blog1Component = __decorate([
    core_1.Component({
        selector: 'app-blog-1',
        templateUrl: './blog-1.component.html',
        styleUrls: ['./blog-1.component.css']
    })
], Blog1Component);
exports.Blog1Component = Blog1Component;
