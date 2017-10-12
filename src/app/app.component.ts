import {Component, OnInit, VERSION, ViewChild} from '@angular/core';
import {AppModelService} from './tool/app/app-model.service';
import {SearchInfoService} from './tool/app/search-info.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  constructor(private _svc: AppModelService, private _srch_svc: SearchInfoService, private _router: Router) {
    this.title = 'Angular 4 Showcase (' + VERSION.full + ')'; }

  title; searchTerm; filteredItems; // strings

  ngOnInit(): void { this._srch_svc.loadSearchInfo(); }

  togglePopupMenu() {
    // toggle visibility of left popout menu
    this._svc.togglePopMenuVisibility();
  }

  private startSearch() {
    const rec = this._srch_svc.searchKeyword(this.searchTerm);
    if (rec.length === 0) { this.filteredItems = null; return; }
    this.filteredItems = [];
    for (let idx = 0; idx < rec.length; idx++) {
      this.filteredItems.push(rec[idx]);
    }
  }

  searchStringChange(event) {
    if (event) { // keys typed, show window with list
      this.startSearch();
    } else { // go empty, hide list
      this.filteredItems = null;
    }
  }

  nav(item) {
    this._router.navigate([item.path]);
    this.filteredItems = null; // hide list
    this.searchTerm = '';
  }
  nav1(path) { this._router.navigate(path); }
}

// @ViewChild(ReferenceComponent) _cmpReference: ReferenceComponent; TODO this doesn't work when routing is in place
// ngAfterViewInit(): void { console.log('AVI: Child => ' + this._cmpReference); } TODO
// this._cmpReference.togglePopupMenu(this._bShowPopMenu); // use direct method invocation TODO
