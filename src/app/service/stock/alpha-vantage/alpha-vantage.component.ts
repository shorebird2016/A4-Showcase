import { Component, OnInit } from '@angular/core';
import { AlphaVantageService } from '../../../tool/stock/alpha-vantage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-alpha-vantage',
  templateUrl: './alpha-vantage.component.html',
  styleUrls: ['./alpha-vantage.component.css'],
  providers: [AlphaVantageService]
})
export class AlphaVantageComponent implements OnInit {
  constructor(private _av_svc: AlphaVantageService) { }

  ticker = 'AAPL'; frequency = 'EOD';
  quotes = [];

  ngOnInit() {
  }

  getQuotes() {
    // depending upon frequency, use daily or weekly
    if (this.frequency === 'EOD') {
      this._av_svc.getEndOfDayQuotes(this.ticker).subscribe((res: Response) => {
        const payload = res.json();
        console.log(payload);
        const results = payload['Time Series (Daily)'];

        // convert strange looking JSON into internal structure
        const keys = Object.keys(results);
        for (let idx = 0; idx < keys.length; idx++) {
          const date = keys[idx];
          const obj = results[date];
          const quote_obj = {
            date: date,
            open: obj['1. open'],
            high: obj['2. high'],
            low: obj['3. low'],
            close: obj['4. close'],
            volume: obj['5. volume']
          };
          this.quotes.push(quote_obj);
        }
        console.log(this.quotes);
      });
    } else { // weekly
      this._av_svc.getEndOfWeekQuotes(this.ticker).subscribe((res: Response) => {
        const payload = res.json();
        console.log(payload);
        const results = payload['Weekly Time Series'];

        // convert strange looking JSON into internal format
        this.quotes = [];
        const keys = Object.keys(results);
        for (let idx = 0; idx < keys.length; idx++) {
          const date = keys[idx];
          const obj = results[date];
          const quote_obj = {
            date:  date,
            open:  obj['1. open'],
            high:  obj['2. high'],
            low:   obj['3. low'],
            close: obj['4. close'],
            volume: obj['5. volume']
          };
          this.quotes.push(quote_obj);
        }
        console.log(this.quotes);
      });
    }
  }
}


// strange kind of data quotes
// "Time Series (Daily)": {
//   "2017-09-08": {
//     "1. open": "74.3300",
//       "2. high": "74.4400",
//       "3. low": "73.8400",
//       "4. close": "73.9800",
//       "5. volume": "14474383"
//   },
//   "2017-09-07": {
//     "1. open": "73.6800",
//       "2. high": "74.6000",
//       "3. low": "73.6000",
//       "4. close": "74.3400",
//       "5. volume": "17165518"
//   },
