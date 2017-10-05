import { Component, OnInit } from '@angular/core';
import {BookService} from '../../tool/app/book.service';
import {Book} from '../../tool/app/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService]
})

export class BookComponent implements OnInit {

  constructor(private _svc: BookService) { }

  promiseBooks: Promise<Book[]>;
  books: Book[];
  errorMessage: string;

  ngOnInit() {
    this.promiseBooks = this._svc.getBooksWithPromise()
    .then(
      books => this.books = books,
      error => this.errorMessage = error
    );
  }

}
