import { Component, OnInit } from '@angular/core';

export interface User {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: number;
  gender: boolean;
}

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})

export class TdfComponent implements OnInit {
  constructor() { }

  user: User = {
    name: 'Alex Chen', address: '2540 Walsh Ave.', city: 'Santa Clara', state: 'CA', gender: true, zip: 95051
  };

  ngOnInit() {}
  submitForm(form_value) { console.log('form submitted...'); }
}
