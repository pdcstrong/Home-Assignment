import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IBook } from './book';
import 'rxjs/add/operator/map';
import { BookSearchService } from '../book-search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})

export class SearchPageComponent implements OnInit {
  books: IBook[];
  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient, private _BookSearchService: BookSearchService) { }

  ngOnInit() {
    this.books = []
  }

  searchBooks(queryTitle: string) {

    this._BookSearchService.getBooks(queryTitle)
      .subscribe(data => {
        this.books = data;
        console.log("searchBooks " + this.books);
      });

  }



}
