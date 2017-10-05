import { Component, OnInit } from '@angular/core';
import { Member } from './member';
import { FileService } from '../../tool/media/file.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css'],
  providers: [FileService]
})
export class BadgeComponent implements OnInit {
  filteredMembers = [];
  members = [];
  badImages = [];
  userIdEntry = '';
  lastNameEntry = '';
  firstNameEntry = '';

  constructor(private file_svc: FileService) { }

  ngOnInit() {// use http service to read JSON file
    this.file_svc.getJsonFile('assets/badge/members.json').subscribe( (res: Response) => {
      const payload = res.json();
      console.log(payload);
      this.members = payload;
      for (let idx = 0; idx < this.members.length; idx++) {// initialize all to be no photo
        this.members[idx].Image = this.members[idx].ID;
      }
      this.filteredMembers = this.members;
    });
  }

  clearEntryFields() {
    this.userIdEntry = '';
    this.firstNameEntry = '';
    this.lastNameEntry = '';
  }

  // filter records based on user selections
  filter(user_choice) {
    let type = null; let loc = null;
    switch (user_choice) {
      case 0: // all members
        this.filteredMembers = this.members;
        return;

      // 1~3 based on type
      case 1: type = 'Regular';  break;
      case 2: type = 'Lifetime'; break;
      case 3: type = 'Inner Circle'; break;

      // 10~30 query for locations
      case 10: loc = 'Milbrae 1'; break;
      case 11: loc = 'Milbrae 2'; break;
      case 12: loc = 'Cupertino 1'; break;
      case 13: loc = 'Cupertino 2'; break;
      case 14: loc = 'Center'; break;
      case 15: loc = 'HQ-BG'; break;
      case 16: loc = 'Almaden'; break;
      case 17: loc = 'Evergreen'; break;
      case 18: loc = 'Milpitas'; break;
      case 19: loc = 'Fremont 1'; break;
      case 20: loc = 'Fremont 2'; break;
      case 21: loc = 'San Jose'; break;
      case 22: loc = 'Sunnyvale'; break;
    }
    if (user_choice >= 1 && user_choice <= 3) {
      this.filteredMembers = this.findMembersByType(type);
    } else {
      this.filteredMembers = this.findMembersByLocation(loc);
    }
  }

  // to find members based on type and location, either arg maybe null (ignore)
  findMembersByType(type) {
    const ret = [];
    for (let idx = 0; idx < this.members.length; idx++) {
      if (type === this.members[idx].Type) {
        ret.push(this.members[idx]);
      }
    }
    return ret;
  }
  findMembersByLocation(location) {
    const ret = [];
    for (let idx = 0; idx < this.members.length; idx++) {
      if (location === this.members[idx].Location) {
        ret.push(this.members[idx]);
      }
    }
    return ret;
  }
  findMembersByIDFirstLast() {
    const ret = [];
    for (let idx = 0; idx < this.members.length; idx++) {
      const id_match = this.userIdEntry === '' || this.userIdEntry == this.members[idx].ID;
      const first_match = this.firstNameEntry === ''
        || this.firstNameEntry.toLowerCase() === this.members[idx].First.toLowerCase();
      const last_match = this.lastNameEntry === ''
        || this.lastNameEntry.toLowerCase() === this.members[idx].Last.toLowerCase();
      if (id_match && first_match && last_match) {
        ret.push(this.members[idx]);
      }
    }
    this.filteredMembers = ret;
  }

  // accessors
  getMemberType = function(member) {
    if (member.Type === 'Regular') {
      return 'REG';
    } else if (member.Type === 'Lifetime') {
      return 'LT';
    } else {
      return 'ICT';
    }
  };
  getLocation = function (member) {return member.Location; };

  // use global array to track member without photos
  markImage(mbr) {
    // console.log('..... No Image => ' + mbr.ID);
    mbr.Image = 'no-photo';
    this.badImages.push(mbr.ID);
  }
}
