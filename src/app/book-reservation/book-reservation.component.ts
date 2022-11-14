import { Component, OnInit } from '@angular/core';

import { Observable, observable, reduce } from 'rxjs';
import { Book } from '../book-list/Book';
import { BookReserveService } from '../book-reserve.service';

@Component({
  selector: 'app-book-reservation',
  templateUrl: './book-reservation.component.html',
  styleUrls: ['./book-reservation.component.scss']
})
export class BookReservationComponent implements OnInit {

  reserveList$: Observable<Book[]>;

  constructor(private reserve: BookReserveService) {
    this.reserveList$ = reserve.reserveList.asObservable();
  }


  ngOnInit(): void {
  }

  getTotal(): number {
    let count = 0;

    this.reserveList$.forEach((books: Book[]) => {
      books.forEach((book: Book) => {
        count += (book.precio * book.cantidad);
      })
    })
    return count;
  }

}


