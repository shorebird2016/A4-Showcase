import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})

export class PlaceComponent implements OnInit {
  constructor() { }
  latitude = 41.32069; // 51.678418  cupertino
  longitude = -122.31503; // 7.809007
  zoomLevel = 15;
  mapStyles = [
    { 'featureType': 'water', 'stylers': [{ 'color': '#9ed7ff'}] }, // water - blue
    // { 'featureType': 'road',  'elementType': 'geometry', 'stylers': [{'hue': '#ddc47a'}, {'gamma': 3.1 }] },
    { 'featureType': 'poi.park', 'stylers': [{ 'hue': '#0c1808' }, { 'saturation': -23 }] }
  ];
  ngOnInit() {}

}
