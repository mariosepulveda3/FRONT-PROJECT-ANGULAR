import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  public getAllBooks(): Observable<any> {
    return this.http.get('https://back-project-angular-fnlk5fxa9-mariosepulveda3.vercel.app/books');
  }

  public getBook(id: string): Observable<any> {
    return this.http.get('https://back-project-angular-fnlk5fxa9-mariosepulveda3.vercel.app/books/id/' + id);
  }

  public postBook(newBook: any) {
    return this.http.post('https://back-project-angular-fnlk5fxa9-mariosepulveda3.vercel.app/books/create', newBook);
  }

  public deleteBook(id: string) {
    return this.http.delete('https://back-project-angular-fnlk5fxa9-mariosepulveda3.vercel.app/books/delete/' + id);
  }

  public putBook(id: string, updatedBook: any) {
    return this.http.put('https://back-project-angular-fnlk5fxa9-mariosepulveda3.vercel.app/books/edit/' + id, updatedBook);
  }
}
