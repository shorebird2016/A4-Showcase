import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-chooser',
  templateUrl: './chooser.component.html',
  styleUrls: ['./chooser.component.css']
})

export class ChooserComponent implements OnInit {
  @Input() myColor; // prefer parent uses this symbol to send data
  @Output() colorEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  setColor(color) {
    this.myColor = color;
    this.colorEmitter.emit(color);
  }
}
