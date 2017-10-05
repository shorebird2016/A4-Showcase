import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../tool/media/movie.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MovieService]
})
export class MovieComponent implements OnInit {
  constructor(private _svc: MovieService) { }
  searchTerm; movies;
  ngOnInit() {
  }
  getMovies() {
    this._svc.getMovie(this.searchTerm).subscribe((res: Response) => {
      const payload = res.json();
      console.log(payload);
      this.movies = payload.Search;
    });
  }
}
