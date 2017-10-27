import { Component, OnInit } from '@angular/core';
import { TheySaidSoService } from '../../../tool/quote/they-said-so.service';
import { Response } from '@angular/http';
import {fadeInAnim} from '../../../util/anim-util';
import {style} from '@angular/animations';

@Component({
  selector: 'app-theysay',
  templateUrl: './theysay.component.html',
  styleUrls: ['./theysay.component.css'],
  animations: [ fadeInAnim(
    style({ transform: 'translateX(500px) scale(0.2) rotate(120deg)', opacity: 0.1 }),
    style({ transform: 'translateX(0)', opacity: 1 }),
    '800ms'
  )],
  providers: [TheySaidSoService]
})

export class TheysayComponent implements OnInit {
  constructor(private _svc: TheySaidSoService) { }
  quoteObj;  author; quoteText; animState = 'appear';
  ngOnInit() { this.getQod(); }
  getQod() {
    this._svc.getQuoteOfDay().subscribe((res: Response) => {
      const payload = res.json();
      console.log(payload);
      this.quoteObj = payload.contents.quotes[0];
      this.quoteText = this.quoteObj.quote;
      this.author = this.quoteObj.author;
    });
  }
}
