import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { IBook } from './search-page/book';
import { HttpClientModule, HttpClient } from '@angular/common/http';
//import { Http, Response} from '@angular/platform-server';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {

  constructor(private http: HttpClient) { }

  private BooksApiURL = "https://www.googleapis.com/books/v1/volumes?q=";

  private messageSource = new BehaviorSubject('Please Login');
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {
    this.messageSource.next(message)
  }


  getBooks(queryTitle: string): Observable<IBook[]> {

    console.log("getBooks " + this.http.get<IBook[]>(this.BooksApiURL + queryTitle + "&alt=json"));
    return this.http.get<IBook[]>(this.BooksApiURL + queryTitle + "&alt=json");

  }

  SearchByISBN(isbn) {
    
    var encodedURI = encodeURI("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn + "&maxResults=1");
    return this.http.get(encodedURI)
      .map(res => res );
  }


}