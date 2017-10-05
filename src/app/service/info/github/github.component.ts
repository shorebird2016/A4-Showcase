import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../../tool/info/github.service';
import {GithubPromiseService} from '../../../tool/info/github-promise.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [GithubService, GithubPromiseService]
})

export class GithubComponent implements OnInit {
  constructor(private _svc: GithubService, private _svc_promise: GithubPromiseService) { }

  userResultPromise;
  userResults; userResults2;

  ngOnInit() {}

  getPopularUsers(term) {
    this._svc.getUsers(term).subscribe((users) => this.userResults = users.items );
  }

  getPopularUsersViaPromise(term) {
    this.userResultPromise = this._svc_promise.getUsersViaPromise(term);
    this.userResultPromise.then((payload) => {
      console.log(payload);
      this.userResults2 = payload.items;
    });
  }
}
