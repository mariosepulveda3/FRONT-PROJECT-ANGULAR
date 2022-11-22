import { BooksService } from './../../services/books.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss'],
})
export class NewBookComponent implements OnInit {
  newBook: any = {
    title: '',
    img: '',
    author: '',
    synopsis: '',
    numberPages: '',
    editorial: '',
    datePublication: '',
  };

  bookForm!: FormGroup;

  constructor(
    private bookService: BooksService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      img: ['', [Validators.required]],
      author: ['', [Validators.required]],
      synopsis: [''],
      datePublication: [''],
    });

    this.bookForm.valueChanges.subscribe((changes) => {
      this.newBook = changes;
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    console.log(file);
    this.bookForm.patchValue({
      img: file,
    });
  }

  onSubmit() {
    this.bookService.postBook(this.newBook).subscribe();
    const formData = new FormData();
    formData.append('img', this.bookForm.get('img')?.value);
    formData.append('title', this.bookForm.get('title')?.value);
    formData.append('author', this.bookForm.get('author')?.value);
    formData.append('synopsis', this.bookForm.get('synopsis')?.value);
    formData.append(
      'datePublication',
      this.bookForm.get('datePublication')?.value
    );
    this.bookService.postBook(formData).subscribe();
    this.router.navigate(['/books']);
  }
}
