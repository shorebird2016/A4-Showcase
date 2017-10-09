import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})

export class DirectionComponent implements OnInit {
  constructor() { }

  latitude = 39.423394; // 51.678418  cupertino
  longitude = -122.224129; // 7.809007
  zoomLevel = 17;
  mapStyles = [
    { 'featureType': 'water', 'stylers': [{ 'color': '#9ed7ff'}] }, // water - blue
    // { 'featureType': 'road',  'elementType': 'geometry', 'stylers': [{'hue': '#ddc47a'}, {'gamma': 3.1 }] },
    { 'featureType': 'poi.park', 'stylers': [{ 'hue': '#0c1808' }, { 'saturation': -23 }] }
  ];
  houseCoord = [41.376246, -122.369850]; // The house 5817 Serrano Dr.
  originCoord = [37.333913, -122.044765]; // my home
  wayPoints = [
    { location: { lat: 37.342155, lng: -121.997373 }, stopover: true }, // C&C home
    { location: { lat: 37.377740, lng: -121.850216 }, stopover: true }, // Chi-chang home 37.377740, -121.850216
    { location: { lat: 38.366529, lng: -121.957151 }, stopover: true }, // vacaville outlet mall 38.366529, -121.957151
    { location: { lat: 40.616870, lng: -122.358667 }, stopover: true }, // redding lunch 40.616870, -122.358667
    { location: { lat: 41.242296, lng: -122.266966 }, stopover: true }  // massbare waterfall Dunsmuir 41.242296, -122.266966
  ];

  ngOnInit() {}

}
