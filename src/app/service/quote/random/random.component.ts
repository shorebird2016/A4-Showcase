import { Component, OnInit } from '@angular/core';
import { ForismaticService } from '../../../tool/quote/forismatic.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
  providers: [ForismaticService]
})

export class RandomComponent implements OnInit {
  constructor(private _svc: ForismaticService) { }
  quoteText; author;
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
