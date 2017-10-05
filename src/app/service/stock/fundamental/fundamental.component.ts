import { Component, OnInit } from '@angular/core';
import { FundamentalService } from '../../../tool/stock/fundamental.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-fundamental',
  templateUrl: './fundamental.component.html',
  styleUrls: ['./fundamental.component.css'],
  providers: [FundamentalService]
})
export class FundamentalComponent implements OnInit {
  constructor(private _svc: FundamentalService) { }

  companyId;
  companies; // contains company_id and latest name
  companyData;
  indicators;

  ngOnInit() {
    this._svc.getCompanies().subscribe((res: Response) => {
      const payload = res.json();
      console.log(payload);
      this.companies = payload;
    });
  }

  getFundamentalByCompanyId() {
    this._svc.getFundamentals(this.companyId).subscribe((res: Response) => {
      const payload = res.text(); // data all in _body
      console.log(payload);
      this.companyData = payload;
    });
  }

  getIndicatorsMeta() {
    this._svc.getIndicatorMetadata().subscribe((res: Response) => {
      const payload = res;
      console.log(payload);
      this.indicators = payload.text(); // NOTE - must use text() to get to body part when not JSON payload
    });
  }
}
