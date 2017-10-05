import { Component, OnInit } from '@angular/core';
import { QuandlService } from '../../../tool/stock/quandl.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-quandl',
  templateUrl: './quandl.component.html',
  styleUrls: ['./quandl.component.css'],
  providers: [QuandlService]
})

export class QuandlComponent implements OnInit {
  constructor(private _svc: QuandlService) { }

  ticker = 'NFLX';
  dataSet;
  quotes;

  ngOnInit() {
  }

  getDataset() {
    this._svc.getQuotes(this.ticker).subscribe((res: Response) => {
      const payload = res.json();
      console.log(payload);
      this.dataSet = payload.dataset_data;
      this.quotes = this.dataSet.data;
    });
  }

}
