import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const ENDP_WEATHER = 'https://api.apixu.com/v1/current.json?key=';
const KEY_WEATHER = '9e450fc4750d4ab0b35215759171103';

@Injectable()
export class ApixuService {
  constructor(private _http: Http) { }
  getWeatherForCity(city_name) {
    const url = ENDP_WEATHER + KEY_WEATHER + '&q=' + city_name;
    return this._http.get(url);
  }
}
