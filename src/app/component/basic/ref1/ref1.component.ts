import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ref1',
  templateUrl: './ref1.component.html',
  styleUrls: ['./ref1.component.css']
})
export class Ref1Component implements OnInit {

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
