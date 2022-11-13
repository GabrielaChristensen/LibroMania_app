import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Book } from './book-list/Book';

const URL = 'https://637172ed07858778617ca11f.mockapi.io/api/books';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) { }


  public getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(URL)
      .pipe(
        tap((books: Book[]) => books.forEach(book => book.cantidad = 0))
      );
  }
}
