import { Component, OnInit } from '@angular/core';
import { BookSearchService } from '../book-search.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  user_name : string  ;
  message: string;
  constructor(private data: BookSearchService) { }

  ngOnInit() {
    
    this.data.currentMessage.subscribe(message => this.message = message)
  }

}
