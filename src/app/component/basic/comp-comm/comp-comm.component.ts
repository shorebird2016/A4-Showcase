import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-comm',
  templateUrl: './comp-comm.component.html',
  styleUrls: ['./comp-comm.component.css']
})

export class CompCommComponent implements OnInit {
  constructor() { }
  chooserInitialColor = 'yellow';
  newColor; viewerColor;
  ngOnInit() {}
  changeColor() { /*this.inputColor = 'red';*/ }
}
