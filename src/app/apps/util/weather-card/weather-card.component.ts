import {Component, OnDestroy, OnInit} from '@angular/core';
import { Response } from '@angular/http';
import {CountryService} from '../../../tool/geo/country.service';
import {ApixuService} from '../../../tool/geo/apixu.service';
import {IpService} from '../../../tool/geo/ip.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
  providers: [CountryService, ApixuService, IpService]
})
export class WeatherCardComponent implements OnInit, OnDestroy {
  constructor(private _country_svc: CountryService, private _ip_svc: IpService,
              private _weather_svc: ApixuService) { }
  tempUnit = 'F';
  addr; mapCenter;
  location; // loc, lat, lon
  cityEntry;
  countryInfo;
  localWeather;

  ngOnInit() {
    // obtain current location from IP service

    this._ip_svc.getIp().subscribe( (res1: Response) => {
      const payload = res1.json();
      console.log(payload);
      this.location = payload;
      this.addr = this.location.city + ', ' + this.location.region_name + ' '
        + this.location.country_name; // build up address
      this.mapCenter = '[' + this.location.latitude + ',' + this.location.longitude + ']';
      if (this.location.city === '') {
        console.log('Can not find city, this device may not have location sensor. ' +
          'Use my home Cupertino as address');
        this.addr = 'Cupertino, CA, United States';
        this.location.city = 'Cupertino, CA';
      }
      this.retriveBundle();
    });

  }

  ngOnDestroy(): void {
    // TODO cancel subscriptions
  }

  retriveBundle() {
    this._weather_svc.getWeatherForCity(this.location.city).subscribe((res2: Response) => {
      const payload2 = res2.json();
      console.log(payload2);
      this.localWeather = payload2.current;
      // replace location structure
      const loc = payload2.location;
      this.location.city = loc.name;
      this.location.country_name = loc.country;
      this.location.region_name = loc.region;
      this.location.latitude = loc.lat;
      this.location.longitude = loc.lon;
      this.addr = this.location.city + ', ' + this.location.region_name + ' '
        + this.location.country_name; // build up address

      // get country flag
      this._country_svc.getCountryInfo(this.location.country_name).subscribe( (res3: Response) => {
        const payload3 = res3.json();
        console.log(payload3);
        this.countryInfo = payload3[0]; // NOTE - this in here still refer to component's context
      });

    });
  }

  // toggle between celcius and fahrenheit
  toggleCF() {
    if (this.tempUnit === 'C') {
      this.tempUnit = 'F';
    } else {
      this.tempUnit = 'C';
    }
  }

  getCityWeather() {
    this.location.city = this.cityEntry;
    this.retriveBundle();
    this.cityEntry = '';
  }

}
