import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.css']
})
export class SimonComponent implements OnInit {

  constructor() { }
  powerOn = false;
  LED = 'OFF';
  playerClicks = []; // stores R G B Y
  masterTunes = [];
  curStepCount = -1; // none yet
  strictMode = false;
  newCycle = false;
  intvPromise; tmrPromise;

  ngOnInit() {
  }

  clickColorButton = function (color_code) {
    if (!this.powerOn || this.curStepCount === 20) {
      return;
    } // do nothing
    // TODO $timeout.cancel(tmrPromise);

    // light up button, play tune
    this.normalColor(color_code); this.playColorTune(color_code);
    this.playerClicks.push(color_code);

    // does the new click match master's, previous clicks should have been matched
    if (color_code !== this.masterTunes[this.playerClicks.length - 1]) {
      this.LED = '??';
      const fail_snd = new Audio('sound/aww.wav'); fail_snd.play();

      // for strict mode, reset to beginning
      if (this.strictMode) {
        setTimeout(function () {
          this.dimmerColor(color_code); // turn off light after 300ms, start playing next cycle
          this.startGame(); }, 500);
        return;
      }

      // normal mode - play all tunes once more, give player a chance to try again
      setTimeout(function () {
        this.dimmerColor(color_code); // turn off light after 300ms, start playing next cycle
        this.playTunes(this.curStepCount);
        this.playerClicks = []; // if length = 0, restart new cycle
      }, 300);
      return;
    }

    // if new cycle just started, wait till expected clicks are in (or timeout)
    if (this.playerClicks.length < this.curStepCount) {
      setTimeout(function () { // turn off light after 300ms, start playing next cycle
        this.dimmerColor(color_code); }, 300);
    } else { // reach expected count w/o error, begin new cycle
      this.curStepCount++;
      this.LED = this.curStepCount;
      if (this.curStepCount === 20) {
        this.playerWins();
        return;
      }

      setTimeout(function () {
        this.dimmerColor(color_code); // turn off light after 300ms, start playing next cycle
        this.playTunes(this.curStepCount);
        this.playerClicks = []; // if length = 0, new cycle
      }, 300);
    }
  };
  powerOnOff = function () {
    if (this.powerOn) {
      this.powerOn = false;
      this.LED = 'OFF';
      // change background color
      // angular.element(document.querySelector('#dv-pwr-left')).css('background-color', 'blue');
      // angular.element(document.querySelector('#dv-pwr-rite')).css('background-color', 'black');
    } else {
      this.powerOn = true;
      this.LED = 1;
      // angular.element(document.querySelector('#dv-pwr-left')).css('background-color', 'black');
      // angular.element(document.querySelector('#dv-pwr-rite')).css('background-color', 'blue');
    }
  };
  togleStrictMode = function () {
    if (!this.powerOn || this.curStepCount === 20) {
      return;
    }
    this.strictMode = !this.strictMode;
/*
    if (this.strictMode)
      angular.element(document.querySelector('#dv-strict')).css('background-color', '#fafc32');
    else
      angular.element(document.querySelector('#dv-strict')).css('background-color', '#d0d608');
*/

  };

  // --start game, reset counter, create new tunes, play 1st tune after 1s
  startGame = function () {
    if (!this.powerOn) {
      return;
    }
    this.LED = 1;
    this.playerClicks = [];
    this.generateTunes(); this.curStepCount = 1;
    this.playTunes(1);

    // wait 5 second to decide if player pushed button
    this.tmrPromise = setTimeout(function () {
      this.wrongButtonOrTimeout();
    }, 5000);
  };

  // --play current sound from index
  colorToSound(color_code) {
    let snd = 'sound1';
    switch (color_code) {
      case 'R': snd = 'sound1'; break;
      case 'G': snd = 'sound2'; break;
      case 'B': snd = 'sound3'; break;
      case 'Y': snd = 'sound4'; break;
    }
    return snd;
  }
  colorToId(color_code) {
    switch (color_code) {
      case 'R': return 'dv-red';
      case 'G': return 'dv-green';
      case 'B': return 'dv-blue';
      case 'Y': return 'dv-yellow';
    }
    return null;
  }

  // --play a number of tunes from masterTunes
  playTunes(count) {
    // a loop playing num_steps then wait for players entry
    let step = 0; let pre_color = null; let playLoopDone = false;
    this.intvPromise = setInterval(() => {
      if (pre_color != null) {
        this.dimmerColor(pre_color); } // turn off last one
      if (!playLoopDone) {
        const audio = new Audio('sound/' + this.colorToSound(this.masterTunes[step]) + '.mp3');
        audio.play();
        const color_code = this.masterTunes[step];
        this.normalColor(color_code);
        pre_color = color_code;
        step++;
        if (step === count) {
          playLoopDone = true; // set flag to timeout once more
        }
      } else {
        this.intvPromise.cancel(); // extra cycle to dim the last click
      }
    }, 1000);
  }

  // --generate a random tune for 20 steps
  generateTunes() {
    for (let step = 0; step < 20; step++) {
      let tune = 'R';
      const idx = Math.floor(Math.random() * 0.4 * 10); // should be 0..3
      switch (idx) {
        case 0:
          tune = 'R';
          break;
        case 1:
          tune = 'G';
          break;
        case 2:
          tune = 'B';
          break;
        case 3:
          tune = 'Y';
          break;
      }
      this.masterTunes.push(tune);
    }
  }

  // --assign dimmerColor color for each color button, color_code = R G B Y
  dimmerColor(color_code) {
    let to_color = '#7d150e';
    switch (color_code) {
      case 'R': to_color =  '#7d150e'; break;
      case 'G': to_color =  '#005B00'; break;
      case 'B': to_color =  '#070d88'; break;
      case 'Y': to_color =  '#767c08'; break;
    }
    // angular.element(document.querySelector('#' + colorToId(color_code))).css('background-color', to_color);
  }
  normalColor(color_code) {
    let to_color = 'red';
    switch (color_code) {
      case 'R': to_color = 'red'; break;
      case 'G': to_color = '#00cb00'; break;
      case 'B': to_color = 'blue'; break;
      case 'Y': to_color = 'yellow'; break;
    }
    // angular.element(document.querySelector('#' + colorToId(color_code))).css('background-color', to_color);
  }
  wrongButtonOrTimeout() {// player push wrong button or didn't push button within 5 sec
    this.LED = '??';
    const fail_snd = new Audio('sound/aww.wav'); fail_snd.play();
    this.dimmerColor(this.masterTunes[this.curStepCount]);
  }
  playerWins() {// player push wrong button or didn't push button within 5 sec
    this.LED = '**';
    const snd = new Audio('sound/applause.wav'); snd.play();
    this.dimmerColor(this.masterTunes[this.curStepCount]);
  }

  playColorTune(color_code) {
    const audio = new Audio('sound/' + this.colorToSound(color_code) + '.mp3');
    audio.play();
  }
}
