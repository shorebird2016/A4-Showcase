import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../../../tool/media/flickr.service';
import { Response } from '@angular/http';
import {fadeInAnim} from '../../../util/anim-util';
import {style} from '@angular/animations';

@Component({
  selector: 'app-flickr',
  templateUrl: './flickr.component.html',
  styleUrls: ['./flickr.component.css'],
  animations: [fadeInAnim(
    style({ transform: 'translate(150px, 150px) rotate(-360deg) scale(0.1)', opacity: 0.05 }),
    style({ transform: 'scale(1)' }), // MUST have this transform to start animation, not sure why TODO????
    '600ms')],
  providers: [FlickrService]
})
export class FlickrComponent implements OnInit {
  constructor(private _flickr_svc: FlickrService) { }

  photos;
  searchTerm; animState1 = 'appear';

  ngOnInit() {
    this.getDefaultPhotos();
  }

  getDefaultPhotos() {
    this._flickr_svc.getDefaultPhotos().subscribe((res: Response) => {
      const payload = res.json();
      console.log(payload);
      this.photos = payload.photos.photo;
    });
  }

  // ---construct image url (Flickr protocol)
  getImageUrl(photo) {
    const farmId = photo.farm,
      server = photo.server,
      photoId = photo.id,
      secret = photo.secret;
    return 'https://farm' + farmId + '.staticflickr.com/' + server + '/' + photoId + '_' + secret + '.jpg';
  }

  searchImages() {
    this._flickr_svc.searchPhotos(this.searchTerm).subscribe((res: Response) => {
      const payload = res.json();
      console.log(payload);
      this.photos = payload.photos.photo;
    });
  }
}
