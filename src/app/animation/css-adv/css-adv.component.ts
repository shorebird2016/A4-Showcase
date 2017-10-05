import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-adv',
  templateUrl: './css-adv.component.html',
  styleUrls: ['./css-adv.component.css']
})
export class CssAdvComponent implements OnInit {
  constructor() { }
  idle = true;
  ngOnInit() {
  }

  showWelcome() {
    // remove hidden class and triggers transition on fly-in element
    setTimeout(function () {
      this.idle = !this.idle; // TODO this does not represent class context here
    }, 1000);
  }
}
