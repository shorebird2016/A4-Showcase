import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-basic',
  templateUrl: './css-basic.component.html',
  styleUrls: ['./css-basic.component.css']
})
export class CssBasicComponent implements OnInit {
  constructor() { }
  trigIf = false;
  toggleTrigIf() { this.trigIf = !this.trigIf; }
  ngOnInit() {
  }

}
