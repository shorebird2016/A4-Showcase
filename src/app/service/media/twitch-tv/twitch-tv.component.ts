import { Component, OnInit } from '@angular/core';
import { TwitchService } from '../../../tool/media/twitch.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-twitch-tv',
  templateUrl: './twitch-tv.component.html',
  styleUrls: ['./twitch-tv.component.css'],
  providers: [TwitchService]
})
export class TwitchTvComponent implements OnInit {
  constructor(private tw_svc: TwitchService) { }

  keyword = 'star trek';
  curChannel;
  channels = [];
  liveStreams = [];

  ngOnInit() { this.getTvChannels(); this.keyword = ''; }

  getTvChannels() {
    this.tw_svc.getTwitchChannels(this.keyword).subscribe((res: Response) => {
      const payload = res.json();
      console.log(payload);
      this.channels = payload.channels;
    }, err => {
      console.log(err);
    });
  }

  getVideoBannerUrl = function (index) {
    let banner_url = this.channels[index].video_banner;
    if (banner_url === null) {
      banner_url = this.channels[index].profile_banner;
      if (banner_url == null) {
        return '../assets/twitch/channel-offline.png'; }
    }
    return banner_url;
  };

  getLogoUrl = function (index) {
    const logo_url = this.channels[index].logo;
    if (logo_url === null) {
      return '../assets/twitch/channel-offline.png'; // 'http://placehold.it/300x300';
    } else { return logo_url; }
  };

  getProfileBanner = function (index) {
    const profile_banner_url = this.channels[index].profile_banner;
    if (profile_banner_url === null) {
      return 'http://placehold.it/200x100';
    } else {
      return profile_banner_url;
    }
  };

  // --make request to get channel details by id
  getChannelInfo = function (index) {
    const channel_id = this.channels[index]._id;
    this.tw_svc.getChannel(channel_id).subscribe( (res: Response) => {
      const payload = res.json();
      this.curChannel = payload.data;
    }, err => {
      console.log(err);
    });
  };

  // --obtain live streams (on-air channels)
  getLiveStreams = function () {
    this.liveStreams = []; this.channels = []; // clear view
    this.tw_svc.getLiveStreams().subscribe( (res: Response) => {
      const payload = res.json();
      this.liveStreams = payload.data.streams;
      console.log(payload);
      console.log(this.liveStreams);
      // copy live list to this.channels (they have different structure) for display
      this.liveStreams.forEach(function (element) {
        this.channels.push(element.channel);
      });
    }, (err) => {
      console.log(err);
    });
  };

}
