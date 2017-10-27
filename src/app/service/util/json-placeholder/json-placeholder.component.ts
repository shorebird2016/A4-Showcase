import { Component, OnInit } from '@angular/core';
import {JsonPlaceholderService} from '../../../tool/util/json-placeholder.service';
import {Subscription} from 'rxjs/Subscription';

const COLLECTION = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];

@Component({
  selector: 'app-json-placeholder',
  templateUrl: './json-placeholder.component.html',
  styleUrls: ['./json-placeholder.component.css']
})

export class JsonPlaceholderComponent implements OnInit {
  constructor(private _svc: JsonPlaceholderService) { }

  collection = COLLECTION;
  results;
  sub: Subscription;

  ngOnInit() {
    this.sub = this._svc.getCollection(this.collection[0]).subscribe(payload => {
      console.log('[JsonPlaceholderComponent] <= ', payload);
      this.results = payload;
    });
  }

  handleComboChange(event) {
    this.sub.unsubscribe();
    const collection_id = event.target.value;
    this.sub = this._svc.getCollection(collection_id).subscribe(payload => {
      console.log('[JsonPlaceholderComponent] <= ', payload);
      this.results = payload;
    });
  }
}
