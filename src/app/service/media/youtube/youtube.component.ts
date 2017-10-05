import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { YoutubeService } from '../../../tool/media/youtube.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css'],
  providers: [YoutubeService]
})

export class YoutubeComponent implements OnInit {
  constructor(private video_svc: YoutubeService) { }
  searchTerm = 'startrek film series';
  items = [];
  ngOnInit() { this.searchVideo(); this.searchTerm = ''; }
  searchVideo() {
    this.video_svc.searchVideo(this.searchTerm)
      .subscribe( (res: Response) => {
        const res_data = res.json(); // must parse raw response
        this.items = res_data.items;
        console.log(this.items[0]);
      } );
  }
  playVideo() {}
}
