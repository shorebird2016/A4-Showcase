import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})

export class TipComponent implements OnInit {

  constructor() { }
  targetColor; target2Color;

  ngOnInit() {
  }

  setTargetColor(color) {
    this.targetColor = color;
  }

  setTarget2Color(color) {
    this.target2Color = color;
  }
}
