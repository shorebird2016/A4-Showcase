import {Directive, Input, OnInit} from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
declare var google: any;

@Directive({
  selector: 'agm-direction'
})

export class AgmDirectionDirective implements OnInit {
  @Input() origin;
  @Input() destination;

  constructor (private gmapsApi: GoogleMapsAPIWrapper) {}

  ngOnInit() {
    this.gmapsApi.getNativeMap().then(map => {
      const directionsService = new google.maps.DirectionsService;
      const directionsDisplay = new google.maps.DirectionsRenderer;
      directionsDisplay.setMap(map);
      directionsService.route({
        origin: {lat: this.origin.latitude, lng: this.origin.longitude},
        destination: {lat: this.destination.latitude, lng: this.destination.longitude},
        waypoints: [],
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
      }, function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });

    });
  }
}
