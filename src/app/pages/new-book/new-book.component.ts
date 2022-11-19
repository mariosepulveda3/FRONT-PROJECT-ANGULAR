import { BooksService } from './../../services/books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

  newBook: any={
    name: '',
    img: '',
  };

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
  }

  send() {
    this.bookService.postBook(this.newBook).subscribe();
  }

}
