import { Component, OnInit } from '@angular/core';
import { AlchemyService } from '../../../tool/info/alchemy.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-alchemy',
  templateUrl: './alchemy.component.html',
  styleUrls: ['./alchemy.component.css'],
  providers: [AlchemyService]
})

export class AlchemyComponent implements OnInit {
  constructor(private _svc: AlchemyService) { }
  comment;
  remarks;
  ngOnInit() {
  }

  getRemarks() {
    this._svc.getOpinion(this.comment).subscribe((res: Response) => {
      const payload = res.json();
      console.log(payload);
      this.remarks = payload;
    });
  }
}
