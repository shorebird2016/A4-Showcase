import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hot-cold',
  templateUrl: './hot-cold.component.html',
  styleUrls: ['./hot-cold.component.css']
})

export class HotColdComponent implements OnInit {
  constructor() { }

  helpVisible = false;
  guessList = [];
  secret;
  message = 'Make your guess!';
  noGame = true; ug;

  ngOnInit() { this.startGame(); }

  showHelp(show) { this.helpVisible = show; }
  startGame() {
    this.secret = Math.round(Math.random() * 100);
    this.guessList = []; // empty array
    this.noGame = false; // TODO disable button doesn't work
  }
  handleGuess(user_guess, event) { // NOTE: use event target which is a form, set input.value by name
    event.target.userGuess.value = null; // clear input
    const val = user_guess.userGuess;
    if (isNaN(val)) {
      this.message = 'You must enter a number.';
      return;
    }
    if (val < 1 || val > 100) {
      this.message = 'Please enter a number between 1 and 100.';
      return;
    }
    this.guessList.push(val);

    // evaluate hot, cold or in between
    const diff = val - this.secret;
    if (diff === 0) {
      this.message = 'You Got it!  Please click NEW GAME';
      this.secret = NaN;
      this.noGame = true;
    } else
      if (diff > 60) {
      this.message = 'Hot';
    } else if (diff > 30) {
      this.message = 'Kinda Hot!';
    } else if (diff > 0) {
      this.message = 'Warm!';
    } else if (diff > -20) {
      this.message = 'Cold!';
    } else {
      this.message = 'Chilling Cold!';
    }
  }
}
