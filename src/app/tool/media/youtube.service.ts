import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const YOUTUBE_SEARCH_ENDPOINT = 'https://www.googleapis.com/youtube/v3/search?';
const YOUTUBE_KEY = 'key=AIzaSyDHpYkujUq1TlNAqmYNtgoHAwa4rbj-tvE'; // from youtube credentials
const QUERY_PART = 'part=snippet&maxResults=20';
const QUERY_DIVIDER = '&';
const QUERY_Q = 'q=';
const QUERY_PAGE_TOKEN = 'pageToken=';

@Injectable()
export class YoutubeService {
  constructor(private _http: Http) { }
  searchVideo(search_string) {
    const url = YOUTUBE_SEARCH_ENDPOINT + QUERY_PART + QUERY_DIVIDER + YOUTUBE_KEY
      + QUERY_DIVIDER + QUERY_Q + search_string;
    return this._http.get(url);
  }
}
