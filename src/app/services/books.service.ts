import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) {}

  public getAllBooks(): Observable<any> {
    return this.http.get("process.env.DB_URL");
  }

  public getBook(id: string): Observable<any>{
    return this.http.get("process.env.DB_URL"+ id);
  }

  public postBook(newBook:any){
    return this.http.post("process.env.DB_URL", newBook);
  }
}
