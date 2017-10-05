import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})

export class ViewerComponent implements OnInit {
  @Input() viewerColor;
  constructor() { }
  ngOnInit() {}
}
