import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material'
import { BookSearchService } from '../book-search.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private data: BookSearchService) { }

  username: string;
  password: string;
  message: string;

  ngOnInit() {
   
    this.data.currentMessage.subscribe(message => this.message = message);
    
  }

  newMessage() {
    this.data.changeMessage("Hello from Sibling")
  }

  login(): void {
    if (this.password == '123456') {
      this.data.changeMessage("Welcome " + this.username);
      this.router.navigate(["user"]);
    } else {
      alert("Invalid credentials");
    }
  }
}
