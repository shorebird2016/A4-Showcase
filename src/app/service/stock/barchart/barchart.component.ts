import { Component, OnInit } from '@angular/core';
import {BarchartService} from '../../../tool/stock/barchart.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css'],
  providers: [BarchartService]
})
export class BarchartComponent implements OnInit {
  constructor(private _svc: BarchartService) { }
  quoteObjects; ticker = 'FB';
  ngOnInit() { this.getQuote(); }

  getQuote() {
    this._svc.getQuote(this.ticker).subscribe((res: Response) => {
      const payload = res.json();
      console.log(payload);
      this.quoteObjects = payload.results[0];
    });
  }
}
