import { Component, OnInit } from '@angular/core';
import { TheySaidSoService } from '../../../tool/quote/they-said-so.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-theysay',
  templateUrl: './theysay.component.html',
  styleUrls: ['./theysay.component.css'],
  providers: [TheySaidSoService]
})
export class TheysayComponent implements OnInit {
  constructor(private _svc: TheySaidSoService) { }
  quoteObj;  author; quoteText;
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
