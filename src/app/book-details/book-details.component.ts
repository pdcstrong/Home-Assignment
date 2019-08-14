import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookSearchService } from '../book-search.service';
import { IBook } from '../search-page/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book;
  constructor(private route: ActivatedRoute, private _BookSearchService: BookSearchService) { }

  ngOnInit() {
    
    let isbn = this.route.snapshot.params['isbn'];
    this._BookSearchService.SearchByISBN(isbn).
      subscribe(data => {
        this.book = data;
        console.log( this.book);
      });

  }

}
