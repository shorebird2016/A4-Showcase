import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})

export class HouseComponent implements OnInit {

  constructor() { }
  houseCoord = [41.376246, -122.369850];
  zoomLevel = 15;
  mapStyles = [
    { 'featureType': 'water', 'stylers': [{ 'color': '#9ed7ff'}] }, // water - blue
    // { 'featureType': 'road',  'elementType': 'geometry', 'stylers': [{'hue': '#ddc47a'}, {'gamma': 3.1 }] },
    { 'featureType': 'poi.park', 'stylers': [{ 'hue': '#0c1808' }, { 'saturation': -23 }] }
  ];
  housePhotos = [
    'front-view', 'front-view2', 'side-view', 'living-room', 'living-room2', 'kitchen', 'kitchen-2', 'dining-room',
    'bedroom-queen', 'twin-bedroom', 'master-bath', 'hot-tub', 'hot-tub2', 'game-room', 'game-room2', 'half-bath'
  ];

  ngOnInit() { }

}
