import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { WeatherService } from '../../../tool/geo/weather.service';

@Component({
  selector: 'app-owm',
  templateUrl: './owm.component.html',
  styleUrls: ['./owm.component.css'],
  providers: [WeatherService]
})
export class OwmComponent implements OnInit {
  constructor(private owm_svc: WeatherService){}
  cityName = 'Cupertino';
  cityWeather;

  ngOnInit() {
    this.searchWeather(); // preload
    this.cityName = '';
  }
  searchWeather() {
    this.owm_svc.getWeatherForCity(this.cityName) // hookup to Observable to get stream
      .subscribe( (res: Response) => {
        this.cityWeather = res.json();
        console.log(this.cityWeather);
      } );
  }
  autoCompleteWeather(loc_obj) {
    console.log(loc_obj);
    this.cityName = loc_obj.formatted_address;
    this.owm_svc.getWeatherForCity(this.cityName) // hookup to Observable to get stream
      .subscribe( (res: Response) => {
        this.cityWeather = res.json();
        console.log(this.cityWeather);
      } );
  }

}
