import { BooksService } from 'src/app/services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss'],
})
export class UpdateBookComponent implements OnInit {
  bookForm!: FormGroup;
  updatedBook!: any;
  id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BooksService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.bookService.getBook(this.id).subscribe((data) => {
        this.updatedBook = data;

        this.bookForm = this.formBuilder.group({
          title: [this.updatedBook.title, [Validators.required]],
          img: [this.updatedBook.img, [Validators.required]],
          author: [this.updatedBook.author, [Validators.required]],
          synopsis: [this.updatedBook.synopsis],
        });
      });
    });

    this.bookForm.valueChanges.subscribe((changes) => {
      this.updatedBook = changes;
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.bookForm.patchValue({
      img: file,
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('img', this.bookForm.get('img')?.value);
    formData.append('title', this.bookForm.get('title')?.value);
    formData.append('author', this.bookForm.get('author')?.value);
    formData.append('synopsis', this.bookForm.get('synopsis')?.value);

    this.bookService
      .putBook(this.id, formData)
      .subscribe(() => this.router.navigate(['/books']));
  }
}
