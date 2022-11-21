import { BooksService } from './../../services/books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  Books?: any[];
  constructor(private bookService: BooksService) {
    this.bookService.getAllBooks().subscribe((data: any) => {
      console.log(data);
      const bookData: any[] = data.map((book: any) => ({
        id: book._id,
        title: book.title,
        image: book.img,
      }));
      this.Books = [...bookData];
      console.log(this.Books);
    });
  }

  ngOnInit(): void {}
}
