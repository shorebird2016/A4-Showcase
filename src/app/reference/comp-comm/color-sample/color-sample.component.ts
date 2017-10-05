import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-color-sample',
  templateUrl: './color-sample.component.html',
  styleUrls: ['./color-sample.component.css']
})

export class ColorSampleComponent implements OnInit {
  constructor() { }
  @Input() myColor;
  ngOnInit() {}

}
