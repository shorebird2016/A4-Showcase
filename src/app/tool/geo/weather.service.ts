// use Open Weather Map API to obtain various weather information
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const OWM_API_PREFIX = 'http://api.openweathermap.org/data/2.5/weather';
const OWM_API_KEY = 'f1c5b8fc51cbbb980463c3923832bc1a';

@Injectable()
export class WeatherService {
  constructor(private _http: Http) { }
  getWeatherForCity(city_name) {
    const url = OWM_API_PREFIX + '?q=' + city_name + '&appid=' + OWM_API_KEY;
    return this._http.get(url);
  }
}
