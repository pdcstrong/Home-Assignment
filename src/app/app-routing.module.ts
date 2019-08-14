import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Routes = [
  { path: 'book/:isbn', component: BookDetailsComponent },
  { path: 'user', component: SearchPageComponent },
  { path: 'login', component: LoginComponent },
  { path : '', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
