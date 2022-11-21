import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  public getAllBooks(): Observable<any> {
    return this.http.get('http://localhost:3000/books');
  }

  public getBook(id: string): Observable<any> {
    return this.http.get(`http://localhost:3000/books/id/${id}`);
  }

  public postBook(newBook: any) {
    return this.http.post('http://localhost:3000/books/create', newBook);
  }

  public deleteBook(id: string) {
    return this.http.delete('http://localhost:3000/books/delete/' + id);
  }

  public putBook(id: string, updatedBook: any) {
    return this.http.put('http://localhost:3000/books/edit/' + id, updatedBook);
  }
}
