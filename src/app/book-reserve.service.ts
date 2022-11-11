import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './book-list/Book';

@Injectable({
  providedIn: 'root'
})

export class BookReserveService {

  private _reserveList: Book[] = [];

  reserveList: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  constructor() { }

  reserveBook(book: Book) {
    let item = this._reserveList.find((v1) => v1.nombre == book.nombre);
    if (!item) {
      this._reserveList.push({ ...book });
    } else {
      item.cantidad += book.cantidad;
    }
    console.log(this._reserveList);
    this.reserveList.next(this._reserveList);
  }

}
