import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class SearchInfoService {
  constructor(private _http: Http) { }

  private searchMap; // TODO later add type for easy access

  loadSearchInfo() {
    this._http.get('../assets/data/search-info.JSON').subscribe((payload) => {
      this.searchMap = payload.json();
    });
  }
  searchKeyword(keyword) { // match any keyword with category
    // iterate map to find matching category substring
    const ret = [];
    if (!keyword) { return ret; }
    for (let idx = 0; idx < this.searchMap.length; idx++) {
      const rec = this.searchMap[idx];
      const cat =  rec.category;
      if (cat.search(keyword) >= 0) {
        ret.push(rec);
      }
    }
    return ret; // list of partial matches
  }
}
