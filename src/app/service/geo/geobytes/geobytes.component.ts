import { Component, OnInit } from '@angular/core';
import { GeobytesService } from '../../../tool/geo/geobytes.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-geobytes',
  templateUrl: './geobytes.component.html',
  styleUrls: ['./geobytes.component.css'],
  providers: [GeobytesService]
})
export class GeobytesComponent implements OnInit {
  constructor(private gb_svc: GeobytesService) { }
  term: string;
  cityList;
  ngOnInit() {
  }
  getAutoCompleteCities() {
    this.gb_svc.autoCompleteCity(this.term).subscribe((res: Response) => {
      const payload = res.json();
      console.log(payload);
      this.cityList = payload;
    });
    this.term = '';
  }
}
