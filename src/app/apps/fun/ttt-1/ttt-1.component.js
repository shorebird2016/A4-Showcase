"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WINNING_SEQUENCES = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];
var Ttt1Component = (function () {
    function Ttt1Component() {
        this.imageName = [
            'blank.png', 'blank.png', 'blank.png',
            'blank.png', 'blank.png', 'blank.png',
            'blank.png', 'blank.png', 'blank.png'
        ]; // 0..8
        this.currentPlayer = 0; // = 0 game not started, = 1 check, = 2 use circle
        this.player1Symbol = 'check.jpg';
        this.player2Symbol = 'circle.jpg'; // default
        this.onePlayer = true;
        this.blanks = [];
    }
    Ttt1Component.prototype.ngOnInit = function () {
    };
    // --user clicks on a cell, outcome maybe game over (ties), or winner shows up, or not done yet
    Ttt1Component.prototype.clickCell = function (cell_index) {
        if (this.imageName[cell_index] !== 'blank.png' || this.currentPlayer === 0) {
            return; // already used or not playing, no clicking
        }
        // track which user this click belongs to, circle team or check team?
        // for circle team - put a circle at this cell
        if (this.currentPlayer === 1) {
            this.imageName[cell_index] = this.player1Symbol;
            this.currentPlayer = 2;
        }
        else if (this.currentPlayer === 2) {
            this.imageName[cell_index] = this.player2Symbol;
            this.currentPlayer = 1; // toggle
        }
        this.evalGameOver();
        if (this.currentPlayer === 0) {
            return;
        } // no one playing
        // none of the ending conditions is met, let computer play next if 1 player game
        if (this.currentPlayer === 2 && this.onePlayer) {
            // player 1 finished, computer next, figure out next best step logically
            // pick a random index from blanks list
            var idx = Math.floor(Math.random() * this.blanks.length);
            this.imageName[this.blanks[idx]] = this.player2Symbol;
            this.currentPlayer = 1;
            this.evalGameOver();
        }
    };
    Ttt1Component.prototype.hideImage = function () { this.dlgImgVisible = false; };
    // --start over
    Ttt1Component.prototype.restartGame = function () {
        this.currentPlayer = 1;
        for (var i = 0; i < 9; i++) {
            this.imageName[i] = 'blank.png';
        }
        // this.msg = '1 or 2 Players ?'; this.dlgTextVisible = true;
        this.dlgImgVisible = true;
        this.dlgImage = 'ready.png';
    };
    // detail handling after user click or computer auto-click
    Ttt1Component.prototype.evalGameOver = function () {
        // evaluate whether game is over? either tie or 1 win
        // translate image names into 3 number sequence for check and circle
        var circles = [];
        var checks = [];
        var blanks = [];
        for (var idx = 0; idx < 9; idx++) {
            if (this.imageName[idx] === 'check.jpg') {
                checks.push(idx);
            }
            else if (this.imageName[idx] === 'circle.jpg') {
                circles.push(idx);
            }
            else if (this.imageName[idx] === 'blank.png') {
                this.blanks.push(idx);
            }
        }
        // game over condition 1 - wining seq appear in either array
        for (var ws_idx = 0; ws_idx < WINNING_SEQUENCES.length; ws_idx++) {
            // compare each element inside winning seq
            if (this.matchWinningPattern(checks, WINNING_SEQUENCES[ws_idx])) {
                this.dlgImgVisible = true;
                if (this.onePlayer) {
                    if (this.player1Symbol === 'check.jpg') {
                        this.dlgImage = 'you-win.jpeg';
                    }
                    else {
                        this.dlgImage = 'i-win.jpeg';
                    }
                }
                else {
                    this.dlgImage = 'player1-win.jpg';
                }
                this.currentPlayer = 0;
                return;
            }
            else if (this.matchWinningPattern(circles, WINNING_SEQUENCES[ws_idx])) {
                this.dlgImgVisible = true;
                if (this.onePlayer) {
                    if (this.player1Symbol === 'circle.jpg') {
                        this.dlgImage = 'you-win.jpeg';
                    }
                    else {
                        this.dlgImage = 'i-win.jpeg';
                    }
                }
                else {
                    this.dlgImage = 'player2-win.jpeg';
                }
                this.currentPlayer = 0;
                return;
            }
        }
        // game over 2 - tie condition w only 1 blank cell
        var count = 0;
        for (var idx1 = 0; idx1 < 9; idx1++) {
            if (this.imageName[idx1] === 'blank.png') {
                count++;
            }
        }
        if (count === 1) {
            this.dlgImgVisible = true;
            this.dlgImage = 'game-over.jpg';
            this.currentPlayer = 0;
        }
    };
    // given a 3 number sequence(seq), find if there's a match in provided array(ary)
    Ttt1Component.prototype.matchWinningPattern = function (ary, seq) {
        for (var seq_idx = 0; seq_idx < seq.length; seq_idx++) {
            var char = seq[seq_idx];
            // find in ary
            var found = false;
            for (var ary_idx = 0; ary_idx < ary.length; ary_idx++) {
                if (char === ary[ary_idx]) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                return false; // any one in seq not found, done
            }
        }
        return true; // all found
    };
    return Ttt1Component;
}());
Ttt1Component = __decorate([
    core_1.Component({
        selector: 'app-ttt-1',
        templateUrl: './ttt-1.component.html',
        styleUrls: ['./ttt-1.component.css']
    })
], Ttt1Component);
exports.Ttt1Component = Ttt1Component;
