import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { CountryService } from '../../../tool/geo/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [ CountryService ]
})
export class CountryComponent implements OnInit {
  countryList = []; countryName; countryInfo;
  constructor(private country_svc: CountryService) { }

  // upon startup, load all the countries, keep disabled it since it takes a lot of memory
  ngOnInit() {
    this.countryName = 'USA';
    this.findCountry();
  }

  findCountry() {
    this.country_svc.getCountryInfo(this.countryName).subscribe( (res: Response) => {
      const payload = res.json();
      console.log(payload);
      this.countryInfo = payload[0]; // comes back in 1 element array
    });
    this.countryName = '';
  }
}
