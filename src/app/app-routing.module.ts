import { UsersComponent } from './pages/users/users.component';
import { NewBookComponent } from './pages/new-book/new-book.component';
import { BooksDetailComponent } from './pages/books-detail/books-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './pages/books/books.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'books', component: BooksComponent},
  {path: 'books/:id', component: BooksDetailComponent},
  {path: 'newbook', component: NewBookComponent},
  {path: 'users', component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
