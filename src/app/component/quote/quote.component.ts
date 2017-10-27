import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../../tool/quote/quote.service';
import { Response } from '@angular/http';
import {style} from "@angular/animations";
import {fadeInAnim} from "../../util/anim-util";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  animations: [ fadeInAnim(
    style({ transform: 'translate(100px, 800px) scale(0.1) scale(0.1)', opacity: 0.1 }),
    style({ opacity: 1 }),
    '800ms'
  )],
  providers: [QuoteService]
})

export class QuoteComponent implements OnInit {
  constructor(private _quote_svc: QuoteService) { }

  quoteObj; animState = 'appear';

  ngOnInit() { this.getRadomQuote(); }

  getRadomQuote() {
    this._quote_svc.getRadomQuote().subscribe((res: Response) => {
      const payload = res.json();
      console.log(payload);
      this.quoteObj = payload;
    });
  }

  tweetQuote() { }
}
