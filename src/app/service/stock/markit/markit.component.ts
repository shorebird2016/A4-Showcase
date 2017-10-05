import { Component, OnInit } from '@angular/core';
import { MarkitService } from '../../../tool/stock/markit.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-markit',
  templateUrl: './markit.component.html',
  styleUrls: ['./markit.component.css'],
  providers: [MarkitService]
})
export class MarkitComponent implements OnInit {
  constructor(private _svc: MarkitService) { }
  ticker = 'AMZN';
  quote;
  ngOnInit() { this.getQuote(); }
  getQuote() {
    this._svc.getQuote(this.ticker).subscribe((res: Response) => {
      const payload = res.json();
      console.log(payload);
      this.quote = payload;
    });
  }
}
