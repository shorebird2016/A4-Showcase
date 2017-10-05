import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../../../tool/media/flickr.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-flickr',
  templateUrl: './flickr.component.html',
  styleUrls: ['./flickr.component.css'],
  providers: [FlickrService]
})
export class FlickrComponent implements OnInit {
  constructor(private _flickr_svc: FlickrService) { }

  photos;
  searchTerm;

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
