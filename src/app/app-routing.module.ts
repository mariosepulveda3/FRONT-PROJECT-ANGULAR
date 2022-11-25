import { AuthUserGuard } from './guards/auth-user.guard';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';
import { NewBookComponent } from './pages/new-book/new-book.component';
import { BooksDetailComponent } from './pages/books-detail/books-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './pages/books/books.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'books', component: BooksComponent },
  { path: 'books/:id', component: BooksDetailComponent },
  {
    path: 'newbook',
    component: NewBookComponent,
    canActivate: [AuthUserGuard],
  },
  {
    path: 'updateBook/:id',
    component: UpdateBookComponent,
    canActivate: [AuthUserGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
