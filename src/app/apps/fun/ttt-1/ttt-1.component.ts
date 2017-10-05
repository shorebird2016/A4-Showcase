import { Component, OnInit } from '@angular/core';

const WINNING_SEQUENCES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];

@Component({
  selector: 'app-ttt-1',
  templateUrl: './ttt-1.component.html',
  styleUrls: ['./ttt-1.component.css']
})

export class Ttt1Component implements OnInit {
  constructor() { }
  imageName: string[] = [
    'blank.png', 'blank.png', 'blank.png',
    'blank.png', 'blank.png', 'blank.png',
    'blank.png', 'blank.png', 'blank.png']; // 0..8
  dlgImgVisible: boolean;
  currentPlayer = 0; // = 0 game not started, = 1 check, = 2 use circle
  player1Symbol = 'check.jpg'; player2Symbol = 'circle.jpg'; // default
  onePlayer = true; dlgImage; blanks = [];

  ngOnInit() {
  }

  // --user clicks on a cell, outcome maybe game over (ties), or winner shows up, or not done yet
  clickCell(cell_index) {
    if (this.imageName[cell_index] !== 'blank.png' || this.currentPlayer === 0) {
      return; // already used or not playing, no clicking
    }

    // track which user this click belongs to, circle team or check team?
    // for circle team - put a circle at this cell
    if (this.currentPlayer === 1) {
      this.imageName[cell_index] = this.player1Symbol;
      this.currentPlayer = 2;
    } else if (this.currentPlayer === 2) {
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
      const idx = Math.floor(Math.random() * this.blanks.length);
      this.imageName[this.blanks[idx]] = this.player2Symbol;
      this.currentPlayer = 1;
      this.evalGameOver();
    }
  }

  hideImage() { this.dlgImgVisible = false; }

  // --start over
  restartGame() {
    this.currentPlayer = 1;
    for (let i = 0; i < 9; i++) {this.imageName[i] = 'blank.png'; }
    // this.msg = '1 or 2 Players ?'; this.dlgTextVisible = true;
    this.dlgImgVisible = true;
    this.dlgImage = 'ready.png';
  }

  // detail handling after user click or computer auto-click
  evalGameOver() {
    // evaluate whether game is over? either tie or 1 win
    // translate image names into 3 number sequence for check and circle
    const circles = []; const checks = []; const blanks = [];
    for (let idx = 0; idx < 9; idx++) {
      if (this.imageName[idx] === 'check.jpg') {
        checks.push(idx);
      } else if (this.imageName[idx] === 'circle.jpg') {
        circles.push(idx);
      } else if (this.imageName[idx] === 'blank.png') {
        this.blanks.push(idx);
      }
    }

    // game over condition 1 - wining seq appear in either array
    for (let ws_idx = 0; ws_idx < WINNING_SEQUENCES.length; ws_idx++) {
      // compare each element inside winning seq
      if (this.matchWinningPattern(checks, WINNING_SEQUENCES[ws_idx])) { // first player wins
        this.dlgImgVisible = true;
        if (this.onePlayer) {
          if (this.player1Symbol === 'check.jpg') {
            this.dlgImage = 'you-win.jpeg';
          } else {
            this.dlgImage = 'i-win.jpeg';
          }
        } else {
          this.dlgImage = 'player1-win.jpg';
        }
        this.currentPlayer = 0;
        return;
      } else if (this.matchWinningPattern(circles, WINNING_SEQUENCES[ws_idx])) { // 2nd player wins
        this.dlgImgVisible = true;
        if (this.onePlayer) {
          if (this.player1Symbol === 'circle.jpg') {
            this.dlgImage = 'you-win.jpeg';
          } else {
            this.dlgImage = 'i-win.jpeg';
          }
        } else {
          this.dlgImage = 'player2-win.jpeg';
        }
        this.currentPlayer = 0;
        return;
      }
    }

    // game over 2 - tie condition w only 1 blank cell
    let count = 0;
    for (let idx1 = 0; idx1 < 9; idx1++) {
      if (this.imageName[idx1] === 'blank.png') {
        count++;
      }
    }
    if (count === 1) { // tie
      this.dlgImgVisible = true;
      this.dlgImage = 'game-over.jpg';
      this.currentPlayer = 0;
    }
  }

  // given a 3 number sequence(seq), find if there's a match in provided array(ary)
  matchWinningPattern(ary, seq) {
    for (let seq_idx = 0; seq_idx < seq.length; seq_idx++) {
      const char = seq[seq_idx];
      // find in ary
      let found = false;
      for (let ary_idx = 0; ary_idx < ary.length; ary_idx++) {
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
  }
}
