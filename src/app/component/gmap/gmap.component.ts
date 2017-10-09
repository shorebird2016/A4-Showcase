import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})

export class GmapComponent implements OnInit {
  constructor() { }

  latitude = 37.3336357; // 51.678418  cupertino
  longitude = -122.0447116; // 7.809007
  zoomLevel = 13;
  mapStyles = [
    { 'featureType': 'water', 'stylers': [{ 'color': '#9ed7ff'}] }, // water - blue
    // { 'featureType': 'road',  'elementType': 'geometry', 'stylers': [{'hue': '#ddc47a'}, {'gamma': 3.1 }] },
    { 'featureType': 'poi.park', 'stylers': [{ 'hue': '#0c1808' }, { 'saturation': -23 }] }
  ];

  ngOnInit() {
  }

  autoCompleteDone(selected_data) {
    console.log('AutoComplete ==> ', selected_data);
    this.latitude = selected_data.geometry.location.lat;
    this.longitude = selected_data.geometry.location.lng;
  }
}
