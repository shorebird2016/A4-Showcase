import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { YoutubeService } from '../../../tool/media/youtube.service';
import {animate, style, transition, trigger} from '@angular/animations';
import {fadeInAnim} from '../../../util/anim-util';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css'],
  animations: [ fadeInAnim(
    style({ opacity: 0.1 }),
    style({ transform: 'translateX(0)' }),
    '600ms') ], // this is not necessary, Angular is smart enough
  providers: [YoutubeService]
})

export class YoutubeComponent implements OnInit {
  constructor(private video_svc: YoutubeService) { }

  searchTerm = 'startrek film series';
  items = []; state = 'appear';

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
