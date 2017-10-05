import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

const TWITCH_CLIENT_ID = 'rymre0n35hkn2bs6me2go85c4uabhz'; // if this is wrong, will get 'Bad Request' 400
const TWITCH_ENDPOINT_SEARCH = 'https://api.twitch.tv/kraken/search/';
const TWITCH_ENDPOINT_CHANNELS = 'https://api.twitch.tv/kraken/channels/';
const TWITCH_ENDPOINT_LIVE_STREAMS = 'https://api.twitch.tv/kraken/streams/';

@Injectable()
export class TwitchService {
  constructor(private _http: Http) { }
  getTwitchChannels(keyword) {
    const url = TWITCH_ENDPOINT_SEARCH + 'channels?query=' + keyword + '&limit=10';
    const headers = new Headers();
    headers.append('Accept', 'application/vnd.twitchtv.v5+json');
    headers.append('Client-ID', TWITCH_CLIENT_ID);
    const opts = new RequestOptions();
    opts.headers = headers;
    return this._http.get(url, opts);
  }

  getChannel(channel_id) {
    const channel_url = TWITCH_ENDPOINT_CHANNELS + channel_id;
    const headers = new Headers();
    headers.append('Accept', 'application/vnd.twitchtv.v5+json');
    headers.append('Client-ID', TWITCH_CLIENT_ID);
    const opts = new RequestOptions();
    opts.headers = headers;
    return this._http.get(channel_url, opts);
  }

  getLiveStreams() {
    const ls_url = TWITCH_ENDPOINT_LIVE_STREAMS;
    const headers = new Headers();
    headers.append('Accept', 'application/vnd.twitchtv.v5+json');
    headers.append('Client-ID', TWITCH_CLIENT_ID);
    const opts = new RequestOptions();
    opts.headers = headers;
    return this._http.get(ls_url, opts);
  }
}
