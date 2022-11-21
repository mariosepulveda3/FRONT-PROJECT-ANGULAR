import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.scss'],
})
export class BooksDetailComponent implements OnInit {
  id: any;
  Book: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BooksService,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.bookService.getBook(this.id).subscribe((data: any) => {
        console.log(data);
        this.Book = { ...data };
      });
    });
  }

  ngOnInit(): void {}

  deleteBook() {
    this.bookService.deleteBook(this.id).subscribe();
    this.router.navigate(['/books']);
  }
}
