import { Component, OnInit } from '@angular/core';
import { WikiService } from '../../../tool/info/wiki.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css'],
  providers: [WikiService]
})
export class WikiComponent implements OnInit {
  constructor(private wiki_svc: WikiService) { }
  userEntry;
  searchResults;
  names; descriptions; links;

  ngOnInit() {
  }

  search() {
    this.wiki_svc.searchByKeyword(this.userEntry).subscribe( (res: Response) => {
      const payload = res.json();
      console.log(payload);
      this.searchResults = payload;

      // return 4 elements in an array, first element is the search term

      // 2nd element - array of result names (default 10)
      this.names = this.searchResults[1];

      // 3rd element - array of matching result description
      this.descriptions = this.searchResults[2];

      // 4th element - links to each
      this.links = this.searchResults[3];

    });
  }
}
