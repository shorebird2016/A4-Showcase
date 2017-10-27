import { Component, OnInit } from '@angular/core';
import { ForismaticService } from '../../../tool/quote/forismatic.service';
import { Response } from '@angular/http';
import {fadeInAnim} from "../../../util/anim-util";
import {style} from "@angular/animations";

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
  animations: [ fadeInAnim(
    style({ transform: 'translate(-200px, -350px) scale(0.2) rotate(-360deg)', opacity: 0.3 }),
    style({ opacity: 1 }),
    '700ms'
    )],
  providers: [ForismaticService]
})

export class RandomComponent implements OnInit {
  constructor(private _svc: ForismaticService) { }

  quoteText; author; animState = 'appear';

  ngOnInit() { this.getQuote(); }

  getQuote() {
    this._svc.getRandomQuote().subscribe((res: Response) => {
      const payload = res.json();
      console.log(payload);
      this.quoteText = payload.quoteText;
      if (payload.quoteAuthor) {
        this.author = payload.quoteAuthor;
      } else { this.author = 'Author unknown';
      }
    });
  }
}
