import {Component, VERSION} from '@angular/core';
// import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
/*  animations: [
    trigger('morph', [
      // state('m1', style({ color: 'blue', border: '1px solid green', borderRadius: '40px' })),
      // state('m2', style({ color: 'orange', border: '3px solid red', borderRadius: '25px' })),
      state('m3', style(
        // { color: 'purple', border: '10px solid brown', borderRadius: '20%', transform: 'scale(2)' })),
      { color: 'purple', transform: 'scale(2)' })),
      transition('void => *', animate('5s ease-in-out'))
    ])
  ]*/
})

export class AppComponent {
  constructor() { this.title = 'Angular 4 Showcase (' + VERSION.full + ')'; }
  title;
  // animFlag = 'm3';
  // changeState() {}
}
